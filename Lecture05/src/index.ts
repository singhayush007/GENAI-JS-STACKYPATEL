import OpenAI from "openai";
import fs from "fs";
import readline from "readline";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type Fruit = {
  id: string;
  name: string;
  description: string;
};

// Math utils
function dotProduct(a: number[], b: number[]) {
  return a.reduce((sum, val, i) => sum + val * b[i], 0);
}

function magnitude(v: number[]) {
  return Math.sqrt(dotProduct(v, v));
}

function cosineSimilarity(a: number[], b: number[]) {
  return dotProduct(a, b) / (magnitude(a) * magnitude(b));
}

// Load data
const fruits: Fruit[] = JSON.parse(
  fs.readFileSync("fruits.json", "utf-8")
);

// CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const embeddings: Record<string, number[]> = {};

  // Generate embeddings
  for (const fruit of fruits) {
    const res = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: fruit.description,
    });

    embeddings[fruit.name.toLowerCase()] = res.data[0].embedding;
  }

  rl.question("🍊 Enter target fruit: ", (target) => {
    const targetKey = target.toLowerCase();

    if (!embeddings[targetKey]) {
      console.log("❌ Fruit not found");
      rl.close();
      return;
    }

    const targetEmbedding = embeddings[targetKey];
    const results = [];

    for (const fruit of fruits) {
      if (fruit.name.toLowerCase() === targetKey) continue;

      const emb = embeddings[fruit.name.toLowerCase()];
      const dot = dotProduct(targetEmbedding, emb);
      const cosine = cosineSimilarity(targetEmbedding, emb);

      results.push({ name: fruit.name, dot, cosine });
    }

    results.sort((a, b) => b.cosine - a.cosine);

    console.log(`\n🎯 Target: ${target}\n`);

    results.forEach((r, i) => {
      console.log(`${i + 1}. ${r.name}`);
      console.log(`   Dot Product      : ${r.dot.toFixed(2)}`);
      console.log(`   Cosine Similarity: ${r.cosine.toFixed(4)}\n`);
    });

    rl.close();
  });
}

main();

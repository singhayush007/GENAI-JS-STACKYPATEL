import path from "path";
import dotenv from "dotenv";
dotenv.config();

import { loadPdf } from "./ingest.js";
import { chunkText } from "./chunk.js";
import { buildVectorStore } from "./vector.js";
import { runAgent } from "./agent.js";

async function main() {
  console.log("📄 Loading PDF...");
  const pdfPath = path.join(process.cwd(), "data", "resume.pdf");
  const text = await loadPdf(pdfPath);

  console.log("✂️ Chunking text...");
  const docs = await chunkText(text);

  console.log("📦 Generating embeddings & storing in Vector DB...");
  const vectorStore = await buildVectorStore(docs);

  console.log("🤖 AI Agent Ready!\n");

  const questions = [
    "What technologies does this person know?",
    "What is the work experience?",
    "Does the candidate know Python?",
  ];

  for (const q of questions) {
    const answer = await runAgent(vectorStore, q);
    console.log("❓", q);
    console.log("🤖", answer, "\n");
  }
}

main().catch(console.error);

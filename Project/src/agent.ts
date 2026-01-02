import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { VectorStore } from "@langchain/core/vectorstores";

const model = new ChatOpenAI({
  modelName: "gpt-4o-mini",
  temperature: 0,
});

const agentPrompt = new PromptTemplate({
  inputVariables: ["context", "question"],
  template: `
You are an AI Agent.
Answer the question using ONLY the information from the context.
If the answer is not present, say "I don't know".

Context:
{context}

Question:
{question}
`,
});

export const runAgent = async (
  vectorStore: VectorStore,
  question: string
) => {
  const retriever = vectorStore.asRetriever({ k: 3 });

  const docs = await retriever.invoke(question);
  const context = docs.map((d) => d.pageContent).join("\n\n");

  const prompt = await agentPrompt.format({
    context,
    question,
  });

  const response = await model.invoke([
    { role: "user", content: prompt },
  ]);

  return response.content;
};

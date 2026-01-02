import { OpenAIEmbeddings } from "@langchain/openai";
import { Chroma } from "@langchain/community/vectorstores/chroma";
import { Document } from "@langchain/core/documents";

export const buildVectorStore = async (docs: Document[]) => {
  const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-3-small",
  });

  return Chroma.fromDocuments(docs, embeddings, {
    collectionName: "resume-agent",
  });
};

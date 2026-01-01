import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({
    model: "gemini-flash-latest",
  });

  const result = await model.generateContent(
    "Hello Gemini from Node.js free tier"
  );

  console.log(result.response.text());
}

run();

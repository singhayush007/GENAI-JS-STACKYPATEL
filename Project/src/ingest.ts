import fs from "fs";
import pdfParse from "pdf-parse";

export const loadPdf = async (filePath: string): Promise<string> => {
  const buffer = fs.readFileSync(filePath);
  const pdfData = await pdfParse(buffer);
  return pdfData.text;
};

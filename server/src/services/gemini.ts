import { GoogleGenAI } from "@google/genai";
import env from "../configs/env.js";
const ai = new GoogleGenAI({
    apiKey: env.GEMINI_API_KEY,
});
// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }
// main();
export async function generateContent(prompt:string):Promise<string>{
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });
    if(!response.text){
        throw new Error("No response from Gemini API");
    }
    return response.text;
}
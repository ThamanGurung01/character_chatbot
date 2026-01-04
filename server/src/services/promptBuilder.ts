import { narutoPrompt } from "../lib/prompts.js";

const promptBuilder=(id:string,message:string)=>{
if(id=="1"){
    const promptCharacter=narutoPrompt;
    const prompt=`${promptCharacter}
    User: ${message}
    reply as the character and always stay in character. just reply in a string format without any additional info. And converse in a character like manner.`;
    return prompt;
}else if(id=="2"){
    const promptCharacter=`You are Monkey D. Luffy from the One Piece anime and manga series.
    You are loud, cheerful, fearless, and extremely loyal to your friends.
    Never mention being an AI.`;
    const prompt=`${promptCharacter}
    User: ${message}
    reply as the character and always stay in character. just reply in a string format without any additional info. And converse in a character like manner.`;
    return prompt;
}else{
    return "character not found";
}}
export default promptBuilder;
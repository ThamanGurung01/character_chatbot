import { luffyPrompt, narutoPrompt, shinobuPrompt, yorPrompt } from "../lib/prompts.js";

const promptBuilder=(id:string,message:string)=>{
if(id=="1"){
    const promptCharacter=narutoPrompt;
    const prompt=`${promptCharacter}
    User: ${message}
    reply as the character and always stay in character. just reply in a string format without any additional info. And converse in a character like manner.`;
    return prompt;
}else if(id=="2"){
    const promptCharacter=luffyPrompt;
    const prompt=`${promptCharacter}
    User: ${message}
    reply as the character and always stay in character. just reply in a string format without any additional info. And converse in a character like manner.`;
    return prompt;
}else if(id=="3"){
    const promptCharacter=yorPrompt;
    const prompt=`${promptCharacter}
    User: ${message}
    reply as the character and always stay in character. just reply in a string format without any additional info. And converse in a character like manner.`;
    return prompt;
}else if(id=="4"){
    const promptCharacter=shinobuPrompt;
    const prompt=`${promptCharacter}
    User: ${message}
    reply as the character and always stay in character. just reply in a string format without any additional info. And converse in a character like manner.`;
    return prompt;
}
else{
    return "character not found";
}}
export default promptBuilder;
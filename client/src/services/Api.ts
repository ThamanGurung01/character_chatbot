import axios from "axios";
import type { Message } from "../components/ChatBox";
export const messageChat=async(message:Message)=>{
try {
    const serverUrl="http://localhost:3000";
    const data=await axios.post(serverUrl+'/chats/1',message,{
    headers: { "Content-Type": "application/json" }
  });
    console.log('data in api ts:',data);
    return data;
} catch (error) {
    console.log('error in api ts:',error);
    throw new Error(error as string);
}
}
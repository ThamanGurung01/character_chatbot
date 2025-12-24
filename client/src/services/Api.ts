import axios from "axios";
import type { Message } from "../components/ChatBox";
export const messageChat = async (message: Message, chatId: string) => {
  try {
    const serverUrl = "http://localhost:3000";
    const response = await axios.post(`${serverUrl}/chats/${chatId}`, message, {
      headers: { "Content-Type": "application/json" }
    });
    return response.data;
  } catch (error) {
    console.log('error in api ts:', error);
    throw new Error(error as string);
  }
}
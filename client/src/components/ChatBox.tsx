import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { messageChat } from '../services/Api'

export interface Message {
  id: string
  text: string
  sender: 'user' | 'character'
}

const ChatBox: React.FC<{ characterName: string }> = ({ characterName }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
    const {id}=useParams();
  const handleSend = () => {
    if (input.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: input,
        sender: 'user',
      }
messageChat(userMessage);
      setMessages((prev) => [...prev, userMessage])
      setInput('')

      setTimeout(() => {
        const characterMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: `Hello! I'm ${characterName}. Thanks for chatting with me!`,
          sender: 'character',
        }
        setMessages((prev) => [...prev, characterMessage])
      }, 500)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  useEffect(()=>{
    return () => {
      setMessages([]);
      setInput('');
    };
  },[id]);
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-400">
            <p>Start a conversation with {characterName}!</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-900 rounded-bl-none'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            rows={3}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors self-end"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import ChatBox from '../components/ChatBox'
import naruto from '../assets/images/naruto.png'
import luffy from '../assets/images/luffy.png'

interface Character {
  id: string
  title: string
  description: string
  image: string
}

const imageMap: Record<string, string> = {
  naruto,
  luffy,
}

const Chat: React.FC = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCharacter = async () => {
      if (!id) {
        setLoading(false)
        return
      }

      try {
        const response = await import('../assets/data/character.json')
        const characters: Character[] = response.default
        const found = characters.find((c) => c.id === id)
        setCharacter(found || null)
      } catch (error) {
        console.error('Failed to load character:', error)
      } finally {
        setLoading(false)
      }
    }

    loadCharacter()
  }, [id])

  if (!id) {
    return (
      <div className="font-bold text-red-500 text-9xl min-h-screen flex justify-center items-center">
        No Chat ID Provided
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    )
  }

  if (!character) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-red-500">Character not found</p>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-4 shadow-sm">
          <img
            src={imageMap[character.image]}
            alt={character.title}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{character.title}</h1>
            <p className="text-sm text-gray-600">{character.description}</p>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-hidden">
          <ChatBox characterName={character.title} />
        </div>
      </div>
    </div>
  )
}

export default Chat

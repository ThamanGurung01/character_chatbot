import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { imageMap } from '../services/ImageMap'
interface Character {
  id: string
  title: string
  description: string
  image: string
}

const Sidebar: React.FC = () => {
  const { id: activeId } = useParams()
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const response = await import('../assets/data/character.json')
        setCharacters(response.default)
      } catch (error) {
        console.error('Failed to load characters:', error)
      }
    }

    loadCharacters()
  }, [])

  return (
    <aside className="w-64 bg-gray-900 text-white h-[94.1vh] overflow-y-auto border-r border-gray-700">
      <div className="p-4">
        <nav className="space-y-2">
          {characters.map((character,index) => (
            <Link
              key={index}
              to={`/chat/${character.id}`}
              className={`flex items-center p-3 rounded-lg transition-all ${activeId === character.id ? 'bg-blue-600 shadow-lg' : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              <img
                src={imageMap[character.image]}
                alt={character.title}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div className="flex-1">
                <p className="font-semibold text-sm truncate">{character.title}</p>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar

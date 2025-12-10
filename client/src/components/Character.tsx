import React from 'react'
import Card from './UI/Card';
import characters from '../assets/data/character.json';
import naruto from '../assets/images/naruto.png'
import luffy from '../assets/images/luffy.png'
const imageMap: Record<string, string> = {
  naruto,
  luffy,
}
const Character:React.FC = () => {
  return (
    <div className='flex gap-5'>
      {characters.map((item) => (
        <Card id={item.id} title={item.title} description={item.description} imageUrl={imageMap[item.image]}/>
      ))}
    </div>
  )
}

export default Character

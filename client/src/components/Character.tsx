import React from 'react'
import Card from './UI/Card';
import naruto from '../assets/images/naruto.png';
import luffy from '../assets/images/luffy.png';
interface CharacterData {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

const Character:React.FC = () => {
    const data:Array<CharacterData>=[{
        id:'1',
        title:'Naruto Uzumaki',
        description:'A spirited ninja from the Hidden Leaf Village, known for his determination and the dream of becoming Hokage.',
        imageUrl:naruto,
    },{
        id:'2',
        title:'Monkey D. Luffy',
        description:'The adventurous captain of the Straw Hat Pirates, famous for his rubber-like abilities and quest for the One Piece.',
        imageUrl:luffy,
    }];
  return (
    <div className='flex gap-5'>
      {data.map((item) => (
        <Card id={item.id} title={item.title} description={item.description} imageUrl={item.imageUrl}/>
      ))}
    </div>
  )
}

export default Character

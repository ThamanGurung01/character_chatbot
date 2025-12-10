import React from 'react'
import { useNavigate } from 'react-router-dom'
type Props={
    'id':string,
    'title':string,
    'description':string,
    'imageUrl':string
}
const Card:React.FC<Props> = ({id,title,description,imageUrl}) => {
    const navigate=useNavigate();
    const handleCardClick=()=>{
        navigate(`/chat/${id}`);
    }
  return (
    <div className='border-4 rounded-lg border-gray-200 bg-gray-200 shadow-xl cursor-pointer hover:shadow-gray-500 p-4 m-4 w-1/4 flex flex-col items-center' onClick={handleCardClick}>
    <img src={imageUrl} alt={title} className='w-[60] grow' />
    <h1>{title}</h1>
    <p>{description}</p>
    </div>
  )
}

export default Card

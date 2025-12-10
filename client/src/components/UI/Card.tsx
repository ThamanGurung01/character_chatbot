import React from 'react'
type Props={
    'title':string,
    'description':string,
    'imageUrl':string
}
const Card:React.FC<Props> = ({title,description,imageUrl}) => {
  return (
    <div className='border-2 border-black p-4 m-4'>
    <img src={imageUrl} alt={title} />
    <h1>{title}</h1>
    <p>{description}</p>
    </div>
  )
}

export default Card

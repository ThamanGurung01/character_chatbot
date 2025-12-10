import React from 'react'
import { useParams } from 'react-router-dom'
const Chat:React.FC = () => {
    const {id}=useParams();
    if(!id){
        return <div className='font-bold text-red-500 text-9xl min-h-screen flex justify-center items-center'>No Chat ID Provided</div>;
    }
  return (
    <div>
        <h1>Chat Page for ID: {id}</h1>
    </div>
  )
}

export default Chat

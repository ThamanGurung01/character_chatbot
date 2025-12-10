import React from 'react'
import Character from '../components/Character'

const Home:React.FC = () => {
  return (
    <div className='p-10 w-full'>
        <h1 className='text-center text-4xl font-bold py-4'>Characters</h1>
      <Character/>
    </div>
  )
}

export default Home

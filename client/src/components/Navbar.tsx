import React from 'react'
import { Link } from 'react-router-dom';

const Navbar:React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0">
      <ul className="flex gap-6">
        <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
        <li><Link to="/chat/1" className="text-white hover:text-gray-300">Chat</Link></li>
        <li><Link to="/login" className="text-white hover:text-gray-300">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar

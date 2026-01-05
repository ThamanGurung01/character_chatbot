import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/chat/:id" element={<Chat/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

import React from 'react'
import { useNavigate} from 'react-router-dom'

export default function Day7pah() {
    const navigate=useNavigate();
    const handleHome=()=>{
        navigate("/home")
    }
    const handleAbout=()=>{
        navigate("/about")
    }
  return (
    <div>
            <button onClick={handleHome}>Home</button>
            <button onClick={handleAbout}>About</button>
    </div>
  )
}

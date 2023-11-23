import React from 'react'
import { useNavigate} from 'react-router-dom'

export default function Navbar() {
    const navigate=useNavigate();
    const handleHome=()=>{
        navigate("/home")
    }
    const handleAbout=()=>{
        navigate("/about")
    }
  return (
    <div>
        <ul>
            <li onClick={handleHome}>HomeUsingNav</li>
            <li onClick={handleAbout}>AboutUsingNav</li>
        </ul>
    </div>
  )
}

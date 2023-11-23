import React from 'react'
import { useNavigate} from 'react-router-dom'

export default function Day7cw() {
    const navigate=useNavigate();
    const handleHome=()=>{
        navigate("/home")
    }
    const handleSingers=()=>{
        navigate("/singers")
    }
    const handleAlbum=()=>{
        navigate("/album")
    }
  return (
    <div>
            <button onClick={handleHome}>Home</button>
            <button onClick={handleSingers}>Singers</button>
            <button onClick={handleAlbum}>Album</button>
    </div>
  )
}

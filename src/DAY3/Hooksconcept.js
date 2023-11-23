import React, {useState} from 'react'

export default function Hooksconcept() {
    const[college,setCollege]=useState("SKCET")
    function handleclick(){
      setCollege("Krishna")
    }
    return (
      <div>
          <h1>My College is {college}</h1>
          <button onClick={handleclick}>CLICK ME</button>
      </div>
    )
}

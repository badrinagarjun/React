import React , {useState} from 'react'

export default function Day3CE() {
    const[showMessage,setShowMessage]=useState(false);
    const toggleMessage = ()=>{
        setShowMessage(!showMessage)
    }
  return (
    <div>
        <button onClick={toggleMessage}>
            {showMessage ? 'Hide Message' : 'Show Message'}
        </button>
    </div>
  )
}

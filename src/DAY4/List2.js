import React from 'react'
export default function List2() {
    const fruits=["Apple", "Mango", "Orange"];
    const display=fruits.map(
        (name)=>{
            return <li>{name}</li>
        }
    )
      return (
    <div>
      <ul>{display}</ul>
    </div>
  )
}
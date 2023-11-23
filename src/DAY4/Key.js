import React from 'react'

export default function Key() {
    const myList=
    [
        {id:'a', value:'apple'},
        {id:'b', value:'banana'},
        {id:'c', value:'orange'},
        {id:'d', value:'grapes'},
        {id:'e', value:'mango'}
    ]
    const listitems =myList.map(
        (item)=>
        <li key={item.id}>
            {item.value}
        </li>
    )
  return (
    <div>
        <ul>{listitems}</ul>
    </div>
  )
}

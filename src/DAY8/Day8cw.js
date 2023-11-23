import React, {useEffect,useState} from 'react'
import axios from 'axios'

export default function Day8cw() {
    const[name,setName]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3002/data`)
        .then(res=>{
            const valu=res.data;
            setName(valu);
        })
    })
  return (
    <div>
        <ul>
            {
            name.map((names)=><li key={names.id}>{names.title}</li>)
            }
        </ul>
        <br></br>
        <ul>
            {
            name.map((names)=><li key={names.id}>{names.author}</li>)
            }
        </ul>
    </div>
  )
}
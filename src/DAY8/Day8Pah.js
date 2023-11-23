import React, {useEffect,useState} from 'react'
import axios from 'axios'

export default function Day8Pah() {
    const[name,setName]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3003/data`)
        .then(res=>{
            const valu=res.data;
            setName(valu);
        })
    })
  return (
    <div>
        <ul>
            {
            name.map((names)=><li key={names.id}>{names.name}</li>)
            }
        </ul>
        <br></br>
        <ul>
            {
            name.map((names)=><li key={names.id}>{names.description}</li>)
            }
        </ul>
        <br></br>
        <ul>
            {
            name.map((names)=><li key={names.id}>{names.price}</li>)
            }
        </ul>
    </div>
  )
}
import React, {useEffect,useState} from 'react'
import axios from 'axios'

export default function AxiosGet() {
    const[name,setName]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/user`)
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
    </div>
  )
}
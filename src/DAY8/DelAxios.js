import React, { useState } from 'react';
import axios from 'axios';

export default function DelAxios() {
    const [id, setId] = useState("");
    const handleUpdateId = (event) => { setId(event.target.value) }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:3001/user/${id}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log("Something went wrong " + error);
        });
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={id} onChange={handleUpdateId}></input>
            <button type="submit">Delete</button>
        </form>
        </div>
    )
}

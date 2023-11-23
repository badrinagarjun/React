import React, { useState } from 'react';
import axios from 'axios';

export default function PostAxios() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const handleUpdateId = (event) => { setId(event.target.value) }
  const handleUpdateName = (event) => { setName(event.target.value) }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:3001/user`, {name})
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
        <input type="text" value={id} onChange={handleUpdateId} placeholder="ID"></input>
        <input type="text" value={name} onChange={handleUpdateName} placeholder="Name"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

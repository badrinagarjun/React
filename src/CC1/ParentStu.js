import React from 'react'

export default function ParentStu() {
  return (
    <div>
        <StudentInfoCard/>
    </div>
  )
}

function StudentInfoCard(){
    return(
        <div>
    <label>Name:</label>&emsp;
    <input type="text" id="name"></input>
    <br></br>
    <label>Age:</label>&emsp;&nbsp;&nbsp;
    <input type="text" id="age"></input>
    <br></br>
    <label>Course:</label>&emsp;&nbsp;&nbsp;
    <input type="radio" name="a"/>CSE
    <input type="radio" name="a"/>IT
        </div>
    )
}

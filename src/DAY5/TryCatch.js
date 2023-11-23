import React from 'react'

export default function TryCatch(props) {
    try{
        if(props.name==='Ajay'){
            throw new Error("Ajay name is not accepted");
        }
    }
    catch(error){
        console.log(error)
        document.write("Please Enter Proper Name")
    }
    finally{
        console.log("Always executable")
    }
  return (
    <div>
      <h1>My name is {props.name}</h1>
    </div>
  )
}
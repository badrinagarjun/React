import React from 'react'

export default function Defaultprop(props) {
  return (
    <div>
        <h1>My name is {props.name} and my college is {props.college}</h1>
    </div>
  )
}

Defaultprop.defaultProps={college:"SKCET"}
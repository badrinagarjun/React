import React from 'react'
import PropTypes from 'prop-types'

export default function Propvalidation(props) {
  return (
    <div>
        <h1>My Name Is {props.name}</h1>
    </div>
  )
}

Propvalidation.propTypes={name:PropTypes.string}

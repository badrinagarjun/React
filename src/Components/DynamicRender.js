import React from 'react'

export default function DynamicRender({isLoggedIn}) {
  return (
    <div>
        {isLoggedIn ? <p>Welcome, user!</p>:<p>Please log in.</p>}
    </div>
  )
}

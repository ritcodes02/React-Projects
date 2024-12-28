import React, { useState } from 'react'

export default function Hook() {
  const [msg,setMsg] = useState('click the btn to see the result');

  const handleClick=()=>{
    setMsg('btn click! event handling is working');
  };
  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}




























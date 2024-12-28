import React, { useState } from 'react'

function State2() {
    const [inputValue,newChangeValue]=useState("Ajay")
     
    const onChange=(e)=>{
        const newValue=e.target.value;
        newChangeValue(newValue)
    }
 
    return (
      <div><h1>State Example
            <i>(useState Usage)</i>
        </h1>
        <h1>{inputValue}</h1>
        <input type="text" value={inputValue} placeholder='Type Something' onChange={onChange} /> 
    </div>
  )
}

export default State2


























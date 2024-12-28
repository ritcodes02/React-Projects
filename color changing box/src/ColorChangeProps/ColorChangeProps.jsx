import React, { useState } from 'react'

function ColorChangeProps({props}) {
    const [activecolor, setActiveColor] = useState(" ");

    const handleChange =(event)=>{
        const {value} = event.target;
        setActiveColor(value);
        props(value);
    }
  return (
    <>
     <input type="text" 
    onChange={handleChange} 
    value={activecolor} />

    </>
    
  )
}
export default ColorChangeProps
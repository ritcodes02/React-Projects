import React from 'react'
import '../ComColorProps/Color.css'

function ColorProps(props) {
  return (
   <main>
     <div className="box" >
      <div className="header" style={{backgroundColor:props.color}}></div>
     <div className="circle" style={{backgroundColor:props.color}}></div> 
     <h3 style={{color:"color"}}>React use needs</h3>
     <p>Lorem ipsum dolor sit amet</p> 
     </div>
     
   </main>
  )
}
export default ColorProps
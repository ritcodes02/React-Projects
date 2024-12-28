import React from 'react'
export default function FunCom(props) {
  return (
    <div>
        <h1>
         <i>FunCom</i> 
        </h1>
        <h3><span style={{color:"skyblue"}}>This is the data i recived from props </span>
            {props.name} <br />
            {props.phone}
            </h3>
    </div>
  )
}


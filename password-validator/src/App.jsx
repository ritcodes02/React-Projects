import React, { useState } from 'react'
import validator from 'validator'

function App() {
  const[errorMsg,setErrorMsg]=useState('')

  const validate=(value)=>{
    if (validator.isStrongPassword(value, { 
      minLength: 8, minLowercase: 1, 
      minUppercase: 1, minNumbers: 1, minSymbols: 1 
  })) { 
      setErrorMsg('Is Strong Password') 
  } else { 
      setErrorMsg('Is Not Strong Password') 
  } 
} 


  
  return (
    <div>
      <h1>Checking Password Strength</h1>
      <h2>Enter Password</h2>
      <input onChange={(e)=>validate(e.target.value)} type="text" />
      {errorMsg===" "?null:errorMsg}
    </div>
  )
}

export default App
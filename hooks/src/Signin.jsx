import React, { useState } from 'react'

function Signin() {
    const[email,setEmail]=useState();

    const handleSubmit = (event)=>{
       event.preventDefault();
       console.log('Sign-in details',{email})

    }
  return (
    <div>
        <h1>sign-in</h1>
        <form onSubmit={handleSubmit}>
           <>
           <label>Email</label>
            <input type="email" value={email} onChange={(e)=>{
               setEmail (e.target.value)}}
                required/>
           </>
           <button type='submit'>Sign-in</button>

        </form>

    </div>
  )
}

export default Signin
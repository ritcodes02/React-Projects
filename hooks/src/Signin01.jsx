import React, { useState } from 'react'

function Signin01() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit = (event)=>{
       event.preventDefualt();
       console.log('Sing-in details:',{email,password});
    }
  return (
    <div>
        <h1>Sign-in</h1>
        <form onSubmit={handleSubmit}>
            <>
            <label>Email</label>
            <input type="email" value={email} 
            onChange={(e)=>{setEmail
                (e.target.value) }}
                required/>
            </>
            <br />
            <>

            <label>Password</label>
            <input type="password" value={password} 
            onChange={(e)=>{setPassword
                (e.target.value) }}
                required/>
            </>
            <button type='submit'>Sign-in</button>
        </form>
    </div>
  )
}

export default Signin01
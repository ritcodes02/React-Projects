import React from 'react'

function Form01(Props) {
   const handleSubmit=(e)=>{
    e.preventDefault();
   } 
  return (
    <div>
        <h1>
            <i>Rungta College</i>
        </h1>
        <h2>Student From</h2>
        <form onSubmit={e =>{handleSubmit(e)}} >
           <h3>Enter Name</h3> <input type="text" name='name' placeholder='Enter Name'  /><br />
           <br />
           <h3>Enter Email</h3> <input type="email" name='email' placeholder='Enter Email' />
            <br /> 
           <h3>Enter Address</h3> <input type="text" name="address" placeholder="Enter address"  />
             <h1>Submit</h1> <input className='submitButton' type="submit" value="Submit" />      
                    
                    </form>
    </div>

  )
}

export default Form01
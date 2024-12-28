import React, { useState } from 'react'

export default function StateCo1() {
    // important point state is non-presistent which means 
    // than when the user refreshes or leave the webpage the 
    // state will disapear
    const [count, setCount] = useState(0);

    const increment = () =>{

        setCount( count + 1)

    }
    const decrement = () =>{

        setCount(count - 1)
   
    }

  return (
    <div>
        <h1>Welcome to my counter app</h1>
        <p>The count is : {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

    </div>
  )
}

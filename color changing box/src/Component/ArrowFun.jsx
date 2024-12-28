import React from 'react'

export const ArrowFun = () => {
    var myBtnStyle={
        "padding":"14px",
        "background":"green",
        "color":"white",
        "border":"none",
        "borderRadius":"5px",
        "margin":"5px"
    }
    function Mybtn(){
        return(
            <>
             <button style={myBtnStyle}>My Custom Button</button>
            </>
        )
    }
  return (
    <div>
        <h1>This is my first arrowfunction</h1>
        <Mybtn/>
        <Mybtn/>
        <Mybtn/>


    </div>
  )
}

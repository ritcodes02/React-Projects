// import React from 'react'
// import ClassStateForm from './Props/ClassStateForm'

// function App() {
//   return (
//     <div>
//        <ClassStateForm/>  
//     </div>
//   )
// }

// export default App







import React from 'react'
import ColorProps from './ComColorProps/ColorProps'
function App() {
  return (
    <div>
      <h1 style={{color:"black", textAlign:"center"}}>We work in dedicated project </h1>
      <h1 style={{color:"black", textAlign:"center"}}>teams, UX design</h1>
        <ColorProps color="orange"/>
        <ColorProps color="blue"/>
        <ColorProps color="green"/>
        <ColorProps color="purple"/>
        <ColorProps color="yellow"/>
        <ColorProps color="tomato"/>
        <button style={{color:"pink"}}>Contact us</button>
    </div>
  )
}

export default App

import './App.css'
import { useState } from 'react'
import ColorChangeProps from './ColorChangeProps/ColorChangeProps'

function App() {
  const [UIcolor, setUIColor] = useState(null);

  const getColor =(color)=>{
    setUIColor(color);
  }

  return (
    <>
      <div className="background">
      <h1>Color Changing Box</h1>
      <div className="color-container" style={{background: UIcolor}}></div>
      <h2>Type any color name and see the result!</h2>
      <ColorChangeProps props={getColor} />
      </div>
      
    </>
  )
}

export default App

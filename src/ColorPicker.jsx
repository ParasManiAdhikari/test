import React, { useState } from 'react'

function CP() {
  const [color, setColor] = useState("black")

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center" style={{backgroundColor: color}}>
      <h1 className="text-white text-3xl font-bold m-2">Pick your desired colour!</h1>
      <input type='color' value={color} onChange={handleColorChange}/>
      <p className='text-white m-2'>You selected : {color}</p>
    </div>
  )
}

export default CP
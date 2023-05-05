import React, { useState, useEffect } from 'react';
import '../stylesheets/App.css'

function App() {
  const [color, setColor] = useState('') // useState to store the color

  // useEffect to generate a random color (https://css-tricks.com/snippets/javascript/random-hex-color/)
  useEffect(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    setColor(`#${randomColor}`)
  }, []);

  return (
    <div className="app">
      <h1>Color Guesser</h1>
      <div className="random-color" style={{ background: color }}></div>
    </div>
  )
}

export default App

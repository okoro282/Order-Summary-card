
import React, { Component } from 'react'
import Paragraph from './Component/Paragraph'
import Design from './Component/Design'
import Highlight from './Component/Highlight'
import Button from './Component/Button'
import './App.css'
function App() {
  
  return (
    <div className="App">
      <Design/>
      <div className='group'>
     <Paragraph/>
     <Highlight/>
     <Button/>
    </div>
    </div>
  )
}

export default App

    

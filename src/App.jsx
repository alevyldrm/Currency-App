import { useState } from 'react'
import './App.css'
import Currenc from './components/Currenc'




function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Currenc />
    </div>
  )
}

export default App

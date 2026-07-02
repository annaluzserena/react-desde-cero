import { useState } from 'react'
import Eventos from './components/Eventos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Eventos></Eventos>
    </div>
  )
}

export default App

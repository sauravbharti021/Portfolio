import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={ <Homepage />}>

      </Route>
    </Routes>
  )
}

export default App

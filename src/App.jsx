import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Interface from './pages/Interface'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Interface/>
    </>
  )
}

export default App

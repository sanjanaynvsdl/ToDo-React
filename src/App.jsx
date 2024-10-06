import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-800 text-center p-3 text-white font-bold'>Hello Building To-Do</h1>
    </>
  )
}

export default App

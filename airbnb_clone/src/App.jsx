import { useState } from 'react'
import Contact from './components/Contacts'
import './components/Contacts.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </>
  )
}

export default App

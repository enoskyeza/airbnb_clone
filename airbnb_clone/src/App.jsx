import { useState } from 'react'
import Contact from './components/Contacts'
import './components/Contacts.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contact
      img = 'mr-whiskerson.png'
      name = 'Mr. Whiskerson'
      phone = '(212) 555-1234'
      email = 'mr.whiskaz@catnap.meow'
      />
      <Contact
      img = 'fluffykins.png'
      name = 'Fluffykins'
      phone = '(212) 555-2345'
      email = 'fluff@me.com'
      />
      <Contact
      img = 'felix.png'
      name = 'Felix'
      phone = '(212) 555-4567'
      email = 'thecat@hotmail.com'
      />
      <Contact
      img = 'pumpkin.png'
      name = 'Pumpkin'
      phone = '(0800) CAT KING'
      email = 'pumpkin@scrimba.com'
      />
    </>
  )
}

export default App

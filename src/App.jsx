import { useState } from 'react'
import PuppyForm from './components/PuppyForm.jsx'
import PuppyMain from './components/PuppyMain.jsx'
import PupPage from './components/pupPage.jsx'
import './App.css'

function App() {
  const[selPup,setSelPup] = useState(null)
  console.log(selPup)
  return (
    <>
      <h1>Puppy Bowl</h1>

      <h2>Add a Puppy!</h2>

      <PuppyForm />
      {selPup ? (
        <PupPage setSelPup={setSelPup} pup={selPup} />
      ) : (
        <PuppyMain setSelPup={setSelPup} />
      )}
    </>
  )
}

export default App

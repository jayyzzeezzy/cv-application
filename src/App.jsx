import { useState } from 'react'
import './App.css'
import Personal from './personal-info/personal'

function App() {
  const [fullName, setFullName] = useState('');

  return (
    <>
      <div className='container'>
        <div className='input'>
          <Personal 
            fullName={fullName}
            handleNameChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className='preview'>
          
        </div>
      </div>
      
      
    </>
  )
}

export default App

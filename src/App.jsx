import { useState } from 'react'
import './App.css'
import Personal from './personal-info/personal'

function App() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  return (
    <>
      <div className='container'>
        <div className='input'>
          <Personal 
            fullName={fullName}
            handleNameChange={(e) => setFullName(e.target.value)}
            phoneNumber={phoneNumber}
            handlePhoneChange={(e) => setPhoneNumber(e.target.value)}
            email={email}
            handleEmailChange={(e) => setEmail(e.target.value)}
            city={city}
            handleCityChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className='preview'>
          
        </div>
      </div>
      
      
    </>
  )
}

export default App

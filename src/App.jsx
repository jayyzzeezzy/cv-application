import { useState } from 'react'
import './App.css'
import Personal from './personal-info/personal'
import Preview from './Preview/Preview';
import Education from './Education/Education';

function App() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [eduFormStatus, setEduFormStatus] = useState('pending');
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  



  function handleEduSubmit() {
    setEduFormStatus('submitted');
  }

  function handleEduEdit() {
    setEduFormStatus('edit');
  }

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
            state={state}
            handleStateChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className='input'>
          <Education 
            school={school}
            handleSchoolChange={(e) => setSchool(e.target.value)}
            degree={degree}
            handleDegreeChange={(e) => setDegree(e.target.value)}
            location={location}
            handleLocationChange={(e) => setLocation(e.target.value)}
            startDate={startDate}
            handleStartDateChange={(e) => setStartDate(e.target.value)}
            endDate={endDate}
            handleEndDateChange={(e) => setEndDate(e.target.value)}
            formStatus={eduFormStatus}
            handleSubmit={handleEduSubmit}
            handleEdit={handleEduEdit}
          />
        </div>
        <div className='preview'>
          <Preview 
            fullName={fullName}
            city={city}
            phoneNumber={phoneNumber}
            email={email}
            state={state}
            school={school}
            degree={degree}
            location={location}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>
      
      
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Personal from './personal-info/personal'
import Preview from './Preview/Preview';
import Education from './Education/Education';
import Experience from './Experience/Experience';

function App() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [personalFormStatus, setPersonalFormStatus] = useState('pending');
  const [eduFormStatus, setEduFormStatus] = useState('pending');
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobStartDate, setJobStartDate] = useState('');
  const [jobEndDate, setJobEndDate] = useState('');
  const [expFormStatus, setExpFormStatus] = useState('pending');
  const [description, setDescription] = useState('');
  
  function handlePersonalSubmit() {
    setPersonalFormStatus('submitted');
  }

  function handlePersonalEdit() {
    setPersonalFormStatus('edit');
  }


  function handleEduSubmit() {
    setEduFormStatus('submitted');
  }

  function handleEduEdit() {
    setEduFormStatus('edit');
  }

  function handleExpSubmit() {
    setExpFormStatus('submitted');
  }

  function handleExpEdit() {
    setExpFormStatus('edit');
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
            formStatus={personalFormStatus}
            handleSubmit={handlePersonalSubmit}
            handleEdit={handlePersonalEdit}
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
        <div className='input'>
          <Experience 
            company={company}
            handleCompanyChange={(e) => setCompany(e.target.value)}
            position={position}
            handlePositionChange={(e) => setPosition(e.target.value)}
            location={jobLocation}
            handleLocationChange={(e) => setJobLocation(e.target.value)}
            startDate={jobStartDate}
            handleStartDateChange={(e) => setJobStartDate(e.target.value)}
            endDate={jobEndDate}
            handleEndDateChange={(e) => setJobEndDate(e.target.value)}
            description={description}
            handleDescriptionChange={(e) => setDescription(e.target.value)}
            formStatus={expFormStatus}
            handleSubmit={handleExpSubmit}
            handleEdit={handleExpEdit}
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
            company={company}
            position={position}
            jobLocation={jobLocation}
            jobStartDate={jobStartDate}
            jobEndDate={jobEndDate}
            description={description}
          />
        </div>
      </div>
      
      
    </>
  )
}

export default App

import { useState } from 'react'
import '../styles/App.css'
import Personal from '../components/Personal-info/Personal';
import Preview from '../components/Preview/Preview';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';

function App() {
  const [fullName, setFullName] = useState('John Doe');
  const [phoneNumber, setPhoneNumber] = useState('(000)000-0000');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [city, setCity] = useState('San Francisco');
  const [state, setState] = useState('CA');
  const [personalFormStatus, setPersonalFormStatus] = useState('pending');
  const [eduFormStatus, setEduFormStatus] = useState('pending');
  const [school, setSchool] = useState('Standford University');
  const [degree, setDegree] = useState('Bachelor of Science, Computer Science');
  const [location, setLocation] = useState('Stanford, CA');
  const [startDate, setStartDate] = useState('8/2000');
  const [endDate, setEndDate] = useState('6/2004');
  const [company, setCompany] = useState('Google');
  const [position, setPosition] = useState('Software Engineer');
  const [jobLocation, setJobLocation] = useState('Mountain View, CA');
  const [jobStartDate, setJobStartDate] = useState('9/2004');
  const [jobEndDate, setJobEndDate] = useState('present');
  const [expFormStatus, setExpFormStatus] = useState('pending');
  const [description, setDescription] = useState('● Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi elementum varius magnis semper aliquam, etiam facilisis enim imperdiet.');
  
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
        <div className='form'>
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

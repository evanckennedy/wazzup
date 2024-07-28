import React, {useState} from 'react'
import AuthBanner from '../components/AuthBanner'
import AuthSection from '../components/AuthSection';

function Authorization() {
  // State to determine whether to show login or register display
  const [isLoginDisplay, setIsLoginDisplay] = useState(true);

  // Function to toggle between login and register display
  const toggleDisplay = () => {
    setIsLoginDisplay(!isLoginDisplay);
  }

  return (
    <div className='flex authorization-container'>
      <AuthBanner isLoginDisplay={isLoginDisplay}/>
      <AuthSection isLoginDisplay={isLoginDisplay} toggleDisplay={toggleDisplay} />
    </div>
  )
}

export default Authorization
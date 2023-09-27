import React from 'react'
import './personalInfo.css'

function PersonalInfo() {
  return (
    <div id="pInfoContainer">
        <div id="contact-details">
            <h1>Contact</h1>
            <div className='contact-flex'><h2>e-mail:</h2><p>regananto986@gmail.com</p></div>
            <div className='contact-flex'><h2>phone:</h2><p>7550314080</p></div>
            <div className='contact-flex'><h2>Address:</h2><p>thiru.v.k street,<br></br>kallakurichi[Dt]<br></br>Viriyur</p></div>
        </div>
        <div id="personal-details">
            <h1>Personal Information</h1>
            <div className='contact-flex'><h2>D.O.B:</h2><p>13/11/2001</p></div>
            <div className='contact-flex'><h2>languages:</h2><p>English,Tamil</p></div>
            <div className='contact-flex'><h2>Father's name:</h2><p>Jaganathan</p></div>
            <div className='contact-flex'><h2>Interest:</h2><p>coding</p></div>  
        </div>
    </div>
  )
}

export default PersonalInfo
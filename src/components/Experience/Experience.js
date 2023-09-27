import React from 'react'
import experience from '../../assets/experience.webp'
import './Experience.css'

function Experience() {
  return (
    <>
        <h1>Experience</h1>
        <div id='Experience-container'data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <img src={experience} alt="" />
            <div id="experience-content">
                <h3>EXPERIENCE IN IT INDUSTRY</h3>
                <h2>Aequalis IT Solutions Pvt Ltd,chennai</h2>
                <p>Attended a course offered by aequalis IT solutions for 5th months and gained many practical experience to become proficient in front-end web devolopment</p>
            </div>
        </div>
    </>
  )
}

export default Experience
import React from 'react'
import './Banner.css'
import document from '../../assets/resume.pdf'

function Banner() {
  return (
    <div id="wrapper">
        <div>
            <h1 id="name">REGAN ANTO </h1>
            <h1><marquee>FRONT-END DEVELOPER</marquee></h1>
            <div id='buttons'>
                <a href={document}>Download CV</a>
                <a href="#project-showcase" >My Work</a>
            </div>
        </div>
    </div>
  )
}

export default Banner
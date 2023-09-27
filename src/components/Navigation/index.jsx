import React from 'react'
import {NavLink} from 'react-router-dom'
import ButtonCard from '../../helpers/ButtonCard/ButtonCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'

function Navigation(props) {
    const classes="navi "+props.className
  return (
    <nav className={classes}>
      
       <div id="title"><span>Front-End</span><p>Devolop</p><span>er</span></div>
       <div id="ankers">
       <NavLink className="NavLink" to="/"><FontAwesomeIcon icon="fa-solid fa-user" />Who am I?</NavLink>
       <a href="#pInfoContainer" className="contact">Skills</a>
       <a href="#project-showcase" className="contact">Projects</a>
        <a href="#pInfoContainer" className="contact">Contact</a>
       </div>
    </nav>
  )
}

export default Navigation
import React from 'react'
import './TechnicalSkills.css'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import java from '../../assets/java.png'
import react from '../../assets/react.png'
import springboot from '../../assets/springboot.png'
import redux from '../../assets/reduxtoolkit.png'
import js from '../../assets/js.png'
import reactrouter from '../../assets/reactrouter.png'
import ts from '../../assets/tw.png'
import GitHub from '../../assets/git.png'

const skillSet=[{image:html,skillName:"HTML"},
                {image:css,skillName:"CSS"},
                {image:js,skillName:"JS"},
                {image:react,skillName:"React"},
                {image:java,skillName:"Java"},
                {image:redux,skillName:"Redux Toolkit"},
                {image:springboot,skillName:"springboot"},
                {image:reactrouter,skillName:"React Router"},
                {image:ts,skillName:"Typescript"},
                {image:GitHub,skillName:" GitHub"}]

function TechnicalSkills() {
  return (
    <>
    <h1>Skill Set</h1>
    <div id="technicalSkills" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            {skillSet.map((skillSet)=>SkillSet(skillSet))}
    </div>
    </>
  )
}

export default TechnicalSkills

export function SkillSet(props){
           return( 
            <div id="skillSet-Container">
                <div><img src={props.image} alt="image" /></div>
                <div id='skillName'><h2>{props.skillName}</h2></div>
            </div> )
                                }
import React from 'react'
import personal from '../../assets/personal.jpg'
import ecoTour from '../../assets/ecoTour.jpg'
import crud from '../../assets/crud.png'
import login from '../../assets/login.jpg'
import './project.css';


const projects=[{image:login,title:"Authorised Login Page",description:"(NOTE:username:regan pwd-jerlin)"+">>>>>>"+"A Efficient login validator with crud operations",techs:"ReactJS,Typescript,Styled Components,React Router"},{image:personal,title:"Personal Website",description:"A Elegant Portfolio to enhance my personal traits and skill",techs:"ReactJS,Styled Components,React Router"},
{image:ecoTour,title:"website For EcoTourism",description:" A clean and good website for tourism and guides.",techs:"html,CSS,JS"},
{image:crud,title:"CRUD operations",description:" A good application application for maintaining a students details",techs:"html,CSS,JS"}
]

function Project() {
  return (
    <>
    <h1>My Projects</h1>
    <div id="project-showcase">
        {projects.map((project)=><ShowCase props={project}/>)}
    </div>
    </>
  )
}

export function ShowCase({props}){
    return (
        <div id="showCase" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <a href='https://ra-login.netlify.app/' target="_blank"><img src={props.image} alt="" /></a>
            <div id="showCase-Content">
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
            <h3>techs:{props.techs}</h3>
            </div>
        </div>
      )
}

export default Project
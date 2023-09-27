import React from 'react'
import './Banner.css'
import document from '../../assets/resume.pdf'



function Banner({BannerContent}) { 
  return (
    <div className='home-banner' id="index">
       <h1>{BannerContent.heading1}</h1>
        <div id='img-cont'><img title="Regan Anto"src={BannerContent.image} alt="home Banner" id="home-banner-image"/></div>

         <div id="content">
       
        <p>{BannerContent.bannerContent}</p> 
        </div>
    </div>
  )
}

export default Banner
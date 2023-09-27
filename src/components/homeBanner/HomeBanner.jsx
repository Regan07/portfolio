import React from 'react'
import Banner from '../banner/Banner'
import homeBanner from '../../assets/homeBanner.jpg'
 
const BannerContent={image:homeBanner,heading1:"About",bannerContent:`Hi i am Regan, I have experience building web applications using the React JavaScript library. I am well-versed in the latest best practices and technologies for building user interfaces, and I am comfortable working with a variety of tools and frameworks to create responsive, high-performance applications. I have a strong understanding of React's functional component-based architecture, and I am skilled in using JSX to build reusable components that can be easily integrated into a variety of projects. I am also experienced in working with Redux toolkit,<br>Overall, I am a highly motivated and skilled React developer with a passion for building high-quality web applications. I am always eager to learn new technologies and techniques, and I am committed to staying up-to-date with the latest developments in the field. `}
function HomeBanner() {
  return (
    <div data-aos="fade-left">
            <Banner BannerContent={BannerContent}/>
    </div>
  )
}

export default HomeBanner
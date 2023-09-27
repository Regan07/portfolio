import { useEffect } from 'react';
import Navigation from './components/Navigation';
import './App.css';
import HomeBanner from './components/homeBanner/HomeBanner';
import TechnicalSkills from './components/techincalSkills/TechnicalSkills';
import Experience from './components/Experience/Experience';
import PersonalInfo from './components/personal-information/personalInfo';
import Project from './components/projects/Project'
import Banner from './components/BannerText/Banner';
import AOS from 'aos'
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({delay:300,duration:1500});
    
  }, [])
  return (
    <div id="App"> 
      <Navigation/>
      <Banner/>
      <HomeBanner/>
      <TechnicalSkills/>
      <Experience/>
      <Project/>
      <PersonalInfo/>
      <h1>Thank you....</h1>
    </div>
  );
}

export default App;

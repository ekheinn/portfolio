import HeroSection from '../../components/HeroSection/HeroSection'
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection'
import TechStackSection from '../../components/TechStackSection/TechStackSection'
import AboutMeSection from '../../components/AboutMeSection/AboutMeSection'
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection'
import CurrentJobSection from '../../components/CurrentJobSection/CurrentJobSection'
import './Home.css'

function Home() {
  return (
    <div id='main'>
      <HeroSection />
      <WelcomeSection />
      <TechStackSection />
      <AboutMeSection />
      <div id='projects-job-container'>
        <ProjectsSection />
        <CurrentJobSection />
      </div>
    </div>
  )
}

export default Home

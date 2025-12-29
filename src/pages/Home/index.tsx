import './Home.css'
import HeroSection from '../../components/HeroSection'
import WelcomeSection from '../../components/WelcomeSection'
import TechStackSection from '../../components/TechStackSection'
import AboutMeSection from '../../components/AboutMeSection'
import ProjectsSection from '../../components/ProjectsSection'
import CurrentJobSection from '../../components/CurrentJobSection'

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

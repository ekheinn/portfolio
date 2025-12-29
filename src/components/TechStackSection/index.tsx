import './TechStackSection.css'
import LogoLoop from '../LogoLoop'
import { techLogos } from '../../constants/techLogos'

function TechStackSection() {
  return (
    <div id='stack-logos'>
      <LogoLoop
        logos={techLogos}
        speed={30}
        direction='right'
        logoHeight={80}
        gap={150}
        hoverSpeed={-5}
        scaleOnHover
        fadeOut
        fadeOutColor='#0c0c0c'
        ariaLabel='Tech Stack'
      />
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction='left'
        logoHeight={50}
        gap={120}
        hoverSpeed={5}
        scaleOnHover
        fadeOut
        fadeOutColor='#0c0c0c'
        ariaLabel='TechStack'
      />
    </div>
  )
}

export default TechStackSection

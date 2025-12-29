import LogoLoop from '../LogoLoop/LogoLoop'
import { techLogos } from '../../constants/techLogos'
import './TechStackSection.css'

function TechStackSection() {
  return (
    <div id='stack-logos'>
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction='right'
        logoHeight={80}
        gap={120}
        hoverSpeed={-5}
        scaleOnHover
        fadeOut
        fadeOutColor='#0e0e0e'
        ariaLabel='Technology partners'
        style={{
          color: 'transparent',
        }}
      />
      <LogoLoop
        logos={techLogos}
        speed={40}
        direction='left'
        logoHeight={50}
        gap={120}
        hoverSpeed={5}
        scaleOnHover
        fadeOut
        fadeOutColor='#0e0e0e'
        ariaLabel='Technology partners'
        style={{
          color: 'transparent',
        }}
      />
    </div>
  )
}

export default TechStackSection

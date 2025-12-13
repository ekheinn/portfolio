import './Projects.css'
import { Link } from 'react-router-dom'
import MagicBento from '../../components/MagicBento/MagicBento'
import { projectsData } from '../../constants/projects'

function Projects() {
  return (
    <div className='projects-page'>
      <h1>Projetos</h1>
      <p>Esta é a página de projetos.</p>

      <Link to='/'>Voltar</Link>

      <div id='bento'>
        <MagicBento
          cardData={projectsData}
          enableTilt={true}
          enableMagnetism={false}
          spotlightRadius={400}
        />
      </div>
    </div>
  )
}

export default Projects

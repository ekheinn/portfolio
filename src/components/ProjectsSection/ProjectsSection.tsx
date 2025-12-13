import './ProjectsSection.css'
import CardSwap, { Card } from '../CardSwap/CardSwap'
import { TbReportAnalytics, TbShieldSearch } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { RiHomeGearLine } from 'react-icons/ri'
import project1 from '../../assets/projects/maturit.png'
import project2 from '../../assets/projects/cms.png'
import project3 from '../../assets/projects/srh.png'

function WindowButtons() {
  return (
    <section id='window-buttons'>
      <div></div>
      <div></div>
      <div></div>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      icon: TbShieldSearch,
      name: 'MaturIT',
      image: project1,
    },
    {
      icon: RiHomeGearLine,
      name: 'CMS',
      image: project2,
    },
    {
      icon: TbReportAnalytics,
      name: 'SRH',
      image: project3,
    },
  ]

  return (
    <div id='projects'>
      <div className='projects-text'>
        <h2>Meus projetos...</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab
          sed eveniet aliquid quaerat libero earum quis dolorem fugiat.
          Sapiente, soluta.
        </p>

        <Link to='/projects'>
          <button>Ver mais</button>
        </Link>
      </div>
      <CardSwap verticalDistance={120} cardDistance={70} delay={6000}>
        {projects.map((project, index) => {
          return (
            <Card key={index}>
              <h3>
                <div>
                  <project.icon /> {project.name}
                </div>
                <WindowButtons />
              </h3>
              <img alt='project-screnshot' src={project.image} />
            </Card>
          )
        })}
      </CardSwap>
    </div>
  )
}

export default ProjectsSection

import './ProjectsSection.css'
import CardSwap, { Card } from '../CardSwap'
import { TbReportAnalytics, TbShieldSearch } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { RiHomeGearLine } from 'react-icons/ri'
import { IoIosArrowForward } from 'react-icons/io'
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
        <h2>Meus projetos!</h2>
        <p>
          Reúno aqui alguns dos projetos que desenvolvi. Em cada um, busco focar
          em performance, boas práticas e experiências bem pensadas. Cada
          projeto conta uma história de aprendizado e evolução, representando
          experimentos, desafios técnicos e ideias que se transformaram em
          soluções de sucesso.
        </p>

        <Link to='/projects'>
          <button className='projects-button'>
            <span>Ver mais</span>
            <IoIosArrowForward className='arrow-icon' />
          </button>
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

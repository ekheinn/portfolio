import './CurrentJobSection.css'
import { useMemo } from 'react'
import Lanyard from '../Lanyard'

function CurrentJobSection() {
  const CONTRACT_START_DATE = '2023-01-02'

  const contractInfo = useMemo(() => {
    const startDate = new Date(CONTRACT_START_DATE)
    const currentDate = new Date()

    const monthNames = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ]

    const startMonth = monthNames[startDate.getMonth()]
    const startYear = startDate.getFullYear()

    const diffInYears =
      (currentDate.getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)

    const years = Math.floor(diffInYears)
    const totalTime = `${years} ano${years !== 1 ? 's' : ''}`

    return {
      startMonth,
      startYear,
      totalTime,
    }
  }, [])

  return (
    <div id='current-job'>
      <div id='lanyard-object'>
        <Lanyard position={[0, 0, 30]} fov={15} />
      </div>
      <div id='current-job-text'>
        <h2>Onde atuo hoje?</h2>

        <p>
          Atualmente atuo no <strong>Grupo NTSec</strong>, onde participo do
          desenvolvimento e evolução de soluções, com foco em performance, boas
          práticas e segurança.
        </p>

        <p className='company-description'>
          Com mais de 15 anos de experiência dedicados à excelência em segurança
          cibernética, o Grupo NTSec é reconhecido por oferecer soluções
          avançadas e integradas para rede, infraestrutura, nuvem e dados. Com
          uma forte cultura de inovação e um compromisso inabalável com o futuro
          seguro, o Grupo NTSec dispõe de um portfólio de serviços que o mantém
          sempre à frente dos desafios tecnológicos, assegurando que seus mais
          de 200 clientes possam focar no crescimento de seus negócios com total
          tranquilidade.
        </p>

        <p className='contract-info' title='Data de início'>
          {contractInfo.startMonth} {contractInfo.startYear} ·{' '}
          {contractInfo.totalTime}
        </p>
      </div>
    </div>
  )
}

export default CurrentJobSection

import ClickSpark from '../ClickSpark/ClickSpark'
import ScrambledText from '../ScrambledText/ScrambledText'
import myselfIMG from '../../assets/myself.png'
import myselfBackIMG from '../../assets/myself-background.png'
import './AboutMeSection.css'
import swordIMG from '../../assets/sword.png'

function AboutMeSection() {
  return (
    <div id='myself-info-container'>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={20}
        sparkCount={8}
        duration={400}
      >
        <div id='myself-info'>
          <div id='myself-img'>
            <img
              id='myself-background'
              alt='myself-background'
              src={myselfBackIMG}
            />
            <img id='myself' alt='myself' src={myselfIMG} />
          </div>
          <img src={swordIMG} className='myself-sword-detail' />
          <section id='myself-text'>
            <h2>Sobre mim...</h2>

            <ScrambledText
              className='scrambled-text'
              radius={80}
              duration={1.2}
              speed={0.5}
              scrambleChars={'.:'}
            >
              <p>
                Sou um desenvolvedor que gosta de desafios e acredita que um bom
                código vai muito além de ferramentas e habilidades técnicas,
                tudo começa no pensamento e nas decisões tomadas desde o início
                de um projeto. Atuo na área de tecnologia com foco na construção
                de soluções seguras e bem estruturadas.
              </p>
              <br />
              <p>
                Ao longo da minha jornada, tive a oportunidade de contribuir em
                projetos estratégicos, incluindo ferramentas de avaliação de
                maturidade de segurança, análise de riscos e apoio à tomada de
                decisão, sempre buscando unir visão técnica à praticidade.
              </p>
              <br />
              <p>
                Fora do código, gosto de manter o equilíbrio enfrentando novos
                desafios, seja aprendendo algo novo ou me desafiando no skate.
                Essa mentalidade de evolução constante também guia minha forma
                de trabalhar: aprender, melhorar e construir soluções cada vez
                mais sólidas e seguras.
              </p>
            </ScrambledText>
          </section>
        </div>
      </ClickSpark>
    </div>
  )
}

export default AboutMeSection

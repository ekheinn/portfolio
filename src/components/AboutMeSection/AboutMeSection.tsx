import ClickSpark from '../ClickSpark/ClickSpark'
import ScrambledText from '../ScrambledText/ScrambledText'
import myselfIMG from '../../assets/myself.png'
import myselfBackIMG from '../../assets/myself-background.png'
import './AboutMeSection.css'

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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum tenetur, ab eum ducimus corrupti, veritatis
                praesentium consectetur labore repudiandae necessitatibus
                sequi aperiam. Labore expedita, saepe laborum possimus
                blanditiis alias reiciendis. <br /> Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Tempora, vel, sunt ipsa,
                laborum fuga ea itaque et nulla eveniet ex alias
                necessitatibus?
              </p>
            </ScrambledText>
          </section>
        </div>
      </ClickSpark>
    </div>
  )
}

export default AboutMeSection


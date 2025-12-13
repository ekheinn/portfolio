import TextType from '../TextType/TextType'
import './WelcomeSection.css'

function WelcomeSection() {
  return (
    <div id='welcome-text'>
      <TextType
        text={[
          'Seja bem-vindo ao meu portifólio!',
          'Conheça o meu trabalho!',
          'Happy coding!',
        ]}
        typingSpeed={80}
        pauseDuration={2000}
        deletingSpeed={35}
        variableSpeed={{ min: 40, max: 180 }}
        showCursor={true}
        cursorBlinkDuration={0.3}
        cursorCharacter='▌'
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        fugit inventore architecto eius aliquam repudiandae beatae in eos
        eveniet, animi velit, rerum delectus error? Ex deleniti error
        impedit excepturi iste.
      </p>
    </div>
  )
}

export default WelcomeSection


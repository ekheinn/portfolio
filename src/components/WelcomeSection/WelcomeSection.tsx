import './WelcomeSection.css'
import TextType from '../TextType/TextType'
import { useEffect, useState } from 'react'
import { TbCode } from 'react-icons/tb'
import { LiaHorseHeadSolid } from 'react-icons/lia'

function WelcomeSection() {
  const [clickCount, setClickCount] = useState(0)
  const [secret, setSecret] = useState(false)

  const handleClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)

    if (newCount === 5) {
      setSecret(true)
      setClickCount(0)
    }
  }

  useEffect(() => {
    if (secret) {
      const timer = setTimeout(() => {
        setSecret(false)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [secret])

  return (
    <div id='welcome-text'>
      <div onClick={handleClick}>
        {secret ? <LiaHorseHeadSolid /> : <TbCode />}
      </div>

      <TextType
        text={[
          'Seja bem-vindo ao meu portfólio.',
          'Transformando ideias em código.',
          'Segurança, código e estratégia.',
          'Criando soluções com propósito.',
        ]}
        cursorCharacter='▌'
      />

      <p>
        Este é o meu espaço para compartilhar projetos, experiências e ideias
        construídas ao longo da minha jornada como desenvolvedor. Aqui você vai
        encontrar soluções pensadas com cuidado, segurança, performance e
        aprendizado contínuo.
      </p>
    </div>
  )
}

export default WelcomeSection

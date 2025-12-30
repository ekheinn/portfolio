import './error.css'
import { Link } from 'react-router-dom'
import FuzzyText from '../../components/FuzzyText'

export const ErroPage = () => {
  return (
    <div id='error-container'>
      <FuzzyText>404</FuzzyText>
      <FuzzyText fontSize='3rem'>Not found</FuzzyText>
      <p> Verifique se a URL está correta e tente novamente.</p>
      <Link to={'/'}>
        <button>Voltar</button>
      </Link>
    </div>
  )
}

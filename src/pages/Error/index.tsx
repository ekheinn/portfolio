import { Link } from 'react-router-dom'

export const ErroPage = () => {
  return (
    <>
      <div>
        <h1>Algum erro ocorreu! </h1>
        <p> Verifique se a URL está correta e tente novamente.</p>
        <Link to={'/'}>
          <button>Voltar</button>
        </Link>
      </div>
    </>
  )
}

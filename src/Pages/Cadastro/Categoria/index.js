import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria () {
  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>
      <Link to = '/cadastro/categoria'>
          Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria
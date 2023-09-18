import { FormEvent, useState } from 'react'

import { SearchButton, InputStyle, FormStyle } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormStyle onSubmit={aoEnviarForm}>
      <InputStyle
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <SearchButton type="submit">Pesquisar</SearchButton>
    </FormStyle>
  )
}
export default FormVagas

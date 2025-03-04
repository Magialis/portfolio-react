import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => {
  const theme = useContext(ThemeContext)

  const imageLinks = theme?.corDeFundo === '#282a35'
    ? [
      "https://github-readme-stats.vercel.app/api?username=Magialis&show_icons=true&theme=nightowl&locale=pt-br&include_all_commits=true",
      "https://github-readme-stats.vercel.app/api/top-langs/?username=Magialis&theme=nightowl&layout=compact&langs_count=8&locale=pt-br&include_all_commits=true"
    ]
    : [
      "https://github-readme-stats.vercel.app/api?username=Magialis&show_icons=true&theme=buefy&locale=pt-br",
      "https://github-readme-stats.vercel.app/api/top-langs/?username=Magialis&theme=buefy&layout=compact&langs_count=8&locale=pt-br&include_all_commits=true"
    ]

  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis placeat
      sapiente minus cumque ipsum? Iure porro provident accusantium numquam,
      quaerat corrupti harum possimus quasi perferendis temporibus repellat ad
      voluptates omnis?
      </Paragrafo>
      <GithubSecao>
        <>
        <img src={imageLinks[0]} alt="Estatísticas dos repositórios no GitHub" />
        <img src={imageLinks[1]} alt="Estatísticas das linguagens mais usadas em projetos no GitHub" />
        </>
      </GithubSecao>
    </section>
  )
}

export default Sobre

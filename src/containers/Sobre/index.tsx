import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo='principal'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis placeat sapiente minus cumque ipsum? Iure porro provident accusantium numquam, quaerat corrupti harum possimus quasi perferendis temporibus repellat ad voluptates omnis?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Magialis&show_icons=true&theme=buefy&card_width=400&locale=pt-br&include_all_commits=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Magialis&theme=buefy&layout=compact&langs_count=8&card_width=400&locale=pt-br&include_all_commits=true"/>
    </GithubSecao>
  </section>
)

export default Sobre

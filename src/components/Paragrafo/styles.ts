import styled from 'styled-components'
import { Props } from '.'; // como esse arquivo se chama index, podemos colocar apenas o .

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`

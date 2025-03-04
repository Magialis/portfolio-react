import styled from 'styled-components'
import { Props } from '.' // como esse arquivo se chama index, podemos colocar apenas o .

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal' ? props.theme.corPrincipal : props.theme.corSecundaria};
  line-height: 22px;
`

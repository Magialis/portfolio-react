import styled from 'styled-components'
import { Props } from '.' // como esse arquivo se chama index, podemos colocar apenas o .

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`

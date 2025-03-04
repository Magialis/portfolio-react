import 'styled-components';
import { Theme as TemaType } from './themes/light';  // Ou './themes/dark', se for o caso

declare module 'styled-components' {
  export type DefaultTheme = TemaType // Agora extendemos o DefaultTheme com o tipo do seu tema
}

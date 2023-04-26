import { createGlobalStyle } from 'styled-components'
import Back from '../../assets/Background.jpg'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

}

body{
  background-image: url(${Back});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
}
`

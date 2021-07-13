import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { AlurakutStyles} from './src/components/Lib/AlurakutCommons'

const GlobalStyle = createGlobalStyle`
  /* Reset CSS*/
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background-color: #D9e6f6;
    font-family: sans-serif; 
  }
  #__next {
    display:flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img{ /* Resetar imagem do github*/
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'black',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

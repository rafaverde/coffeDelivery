import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }
  
  body, button, textarea, input {
    font-family: ${(props) => props.theme.fonts["secondary-font"]};
  }

  input, textarea {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors["base-text"]} ;

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts["primary-font"]};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors["yellow-dark"]};
  }
`

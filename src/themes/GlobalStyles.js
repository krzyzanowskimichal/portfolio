import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text.primary};
    font-family: 'InconsolataLGCmarkup', Tahoma, Helvetica, Arial, sans-serif;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  `
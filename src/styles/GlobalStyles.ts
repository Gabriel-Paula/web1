import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
  @font-face {
      font-family:'Roboto' ;
      font-style: normal;
      font-weight: 400;
      src: url(' https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@1,200..900') forma;
  }
  *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: "Roboto";
  }
`
export const color = {
    black:"#FFE4C4"
}
  
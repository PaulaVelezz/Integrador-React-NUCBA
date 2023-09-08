import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --black-bg: #010101;
        --text-primary: #fff2e6;
        --bg-naranjita: #FF6600;
        --bg-green: #00BF63;
    }

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /*font-family: 'Roboto Mono', monospace;*/
    /*font-family: 'Blenny Trial', sans-serif; */
}

body {
    background-color: #010101;
    color: whitesmoke;
    font-family: 'Roboto Mono', monospace; 
    overflow-x: hidden;
}

a {
    text-decoration: none;
    font-family: 'Roboto Mono', monospace;
}

li {
    list-style: none;
}

html {
    scroll-behavior: smooth;
    overflow-x: hidden;
}

::-webkit-scrollbar{
	display: none;
}

`;

import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --black-bg: #010101;
        --text-primary: #fff2e6;
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
}

::-webkit-scrollbar{
	display: none;
}

`
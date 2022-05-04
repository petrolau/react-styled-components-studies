import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&family=Poppins:wght@200&display=swap');
    
    * {
        box-sizing:border-box;
        margin: 0;
    }

    body {
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192,100%,9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    p {
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }


`;

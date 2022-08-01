import styled, { createGlobalStyle } from 'styled-components';
import noto_serif_display from '../assets/fonts/noto/NotoSerifDisplay-VariableFont_wdth,wght.ttf';
import playfair_display from '../assets/fonts/playfair/PlayfairDisplay-VariableFont_wght.ttf';
import montserrat from '../assets/fonts/montserrat/Montserrat-VF.ttf';
import { rem } from '../helpers/units';


export const GlobalFonts = createGlobalStyle`
@font-face {
    font-family: 'Noto Serif Display', serif;
    src: url(${noto_serif_display}) format('truetype');
}

@font-face {
    font-family: 'Playfair Display', serif;
    src: url(${playfair_display}) format('truetype');
}

@font-face {
    font-family: 'Montserrat', sans-serif;
    src: url(${montserrat}) format('ttf');
}
`;

const GlobalStyles = createGlobalStyle`
:root {
    --primary: #000000;
    --accent: #ffffff;
    --indigo: indigo;
    --indigoLight: #523766;
}
html {
    position: relative;
    width: 100vw;
    height: 100vh;
    font-size: 100%;
    box-sizing: border-box;
    z-index: 0;
}
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
*{
    scroll-behavior: smooth;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        width: ${rem(14)};
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(223, 223, 223, 0.502);
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        display: block;
        border-radius: ${rem(50)};
        background: #c42f4f;
    }
}
body,
#root {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: ${rem(16)};
    font-family: 'Montserrat';
    font-weight: 400;
    background: var(--accent);
    color: var(--primary);
    z-index: inherit;
    user-select: none;
}
`;

export default GlobalStyles;

export const AppWrapper = styled.main`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
`;
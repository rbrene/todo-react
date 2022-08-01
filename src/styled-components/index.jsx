import styled, { createGlobalStyle } from 'styled-components';
import { rem } from '../helpers/units';


const GlobalStyles = createGlobalStyle`
:root {
    --primary: #1b101b;
    --accent: #ffffff;
    --purple: hsl(300, 100%, 25%);
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
    font-family: 'Poppins', sans-serif;
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

export const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
`;
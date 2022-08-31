import styled from 'styled-components';
import { rem, em } from '../../helpers/units';


export const H1 = styled.h1`
    font-size: clamp(${rem(48)}, 6vw, ${rem(64)});
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: inherit;
    text-transform: uppercase;
    letter-spacing: 0.5ch;
    line-height: 1.2;
    color: ${({theme}) => theme.second};
`;
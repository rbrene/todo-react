import styled from 'styled-components';
import { rem, em } from '../../helpers/units';


export const H1 = styled.h1`
    font-size: clamp(${rem(48)}, 6vw, ${rem(64)});
    font-family: 'Montserrat';
    font-weight: 800;
    font-stretch: 150%;
    text-transform: uppercase;
    letter-spacing: ${em(2)};
    line-height: 1.2;
`;
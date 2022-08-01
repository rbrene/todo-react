import styled from 'styled-components';
import { animated as a } from '@react-spring/web';
import { rem, em } from '../../helpers/units';


const Button = styled(a.button)`
    position: relative;
    font-size: inherit;
    font-family: inherit;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: ${em(2)};
    padding-block: ${em(8)};
    padding-inline: ${em(16)};
`;

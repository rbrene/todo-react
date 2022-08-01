import styled from 'styled-components';
import { animated as a } from '@react-spring/web';
import { rem, em } from '../../helpers/units';


export const Form = styled(a.form)`
    position: relative;
    width: auto;
    height: auto;
`;

export const TaskForm = styled(Form)`
    width: auto;
    height: 100%;
    display: flex;
    //padding-right: clamp(${em(32)}, 8vw, ${em(96)});

    input[type='text'] {
        width: 100%;
        height: 60%;
        margin-block: auto;
    }
`;


export const Input = styled(a.input)`
    position: relative;
    font-size: clamp(${rem(16)}, 1vw, ${rem(18)});
    font-family: inherit;
    font-weight: 400;
    padding-inline: ${rem(16)} ${rem(8)};
    outline: none;
    border: none;
    //background: var(--indigo);
    color: var(--primary);
    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.5);

    &::placeholder {
        color: var(--primary);
        opacity: 0.5;
    }

`;

export const Checkbox = styled(a.input)`
    position: relative;
`;
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
`;

export const Input = styled(a.input)`
    position: relative;
    width: 100%;
    height: ${rem(48)};
    padding-inline: ${rem(16)};
    font-family: inherit;
    font-weight: 500;
    background: #232121;
    border: none;
    border-radius: ${em(8)};
    outline: none;
    letter-spacing: ${em(1)};
    color: #fff;
`;

export const Checkbox = styled(a.input)`
    position: relative;
    width: ${rem(20)};
    height: ${rem(20)};
    background: transparent;
    outline: none;
    border: 2px solid #232121;
    border-radius: 50%;
    appearance: none;

    &[type='checkbox']::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #232121;
        border-radius: 50%;
        transform: scale(0);
        transition: transform 0.3s ease-in-out;
        z-index: inherit
    }
    &:checked[type='checkbox']::before {
        transform: scale(1);
    }
`;
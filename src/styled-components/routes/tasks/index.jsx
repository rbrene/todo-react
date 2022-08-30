import styled from 'styled-components';
import { Section } from '../index';
import { Container } from '../../layouts/index';
import { animated as a } from '@react-spring/web';
import { rem, em } from '../../../helpers/units';


export const TasksSection = styled(Section)``;


export const TasksArticle = styled(a.article)`
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--accent);
    color: var(--primary);
    z-index: inherit;
`;

export const Taskslist = styled(a.ul)`
    list-style: none;
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-direction: column;
    background: none;
    z-index: inherit;
`;

export const Taskitem = styled(a.li)`
    position: relative;
    width: 100%;
    height: ${rem(64)};
    font-size: clamp(${rem(12)}, 1vw, ${rem(14)});
    letter-spacing: ${em(2)};
    display: grid;
    grid-template-columns: 10% 1fr 10%;
    border-bottom: 1px solid #232121;
    text-transform: capitalize;
    z-index: inherit;
`;

export const NoTasks = styled(a.li)`
    position: relative;
    height: 100%;
    width: 100%;
    font-size: clamp(${rem(14)}, 2vw, ${rem(18)});
    font-family: inherit;
    font-weight: 500;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
`;

export const TaskAction = styled(a.span)`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: inherit;

    input[type='checkbox'] {
        margin-inline: auto;
    }

    &:nth-child(2) {
        padding-left: ${rem(16)};
    }

    svg {
        margin-inline: auto;
        opacity: 0.4;

        &:hover {
            opacity: 1;
        }
    }
`;
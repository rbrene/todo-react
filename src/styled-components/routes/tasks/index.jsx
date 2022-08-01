import styled from 'styled-components';
import { Section } from '../index';
import { Container } from '../../layouts/index';
import { animated as a } from '@react-spring/web';
import { rem, em } from '../../../helpers/units';


export const TasksSection = styled(Section)`

`;


export const Grid = styled(Container)`
    padding: clamp(${rem(16)}, 4vw, ${rem(32)});
    display: inline-grid;
    grid-template-rows: ${em(160)} 1fr;
`;

export const Column = styled(Container)`
    max-width: ${em(800)};
    margin-inline: auto;
    padding-inline: clamp(${em(16)}, 4vw ,${em(32)});
    &:nth-child(1) {
        grid-row: 1;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: ${rem(8)};
    }

    &:nth-child(2) {
        grid-row: 2;
    }
`;

export const SubGrid = styled(Container)`
    display: inline-grid;
    &:nth-child(1) {
        grid-template-rows: 1.2fr 1fr;
    }
`;

export const SubGridColumn = styled(Container)`
    &:nth-child(1) {
        display: flex;
        align-items: end;
    }
`;

export const TasksArticle = styled(a.article)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const Taskslist = styled(a.ul)`
    list-style: none;
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-rows: ${rem(64)};
    z-index: inherit;
    /* overflow-x: hidden;
    overflow-y: auto; */
`;

export const Taskitem = styled(a.li)`
    position: relative;
    display: inline-grid;
    grid-template-columns: minmax(${em(32)}, ${em(64)}) 1fr minmax(${em(32)}, ${em(96)});
    font-size: clamp(${rem(12)}, 1vw, ${rem(16)});
    font-weight: 400;
    border-bottom: 1px solid rgba(35, 0, 59, 0.26);
    color: var(--primary);
`;

export const NoTasks = styled(a.li)`
    position: relative;
    font-size: clamp(${rem(12)}, 2vw, ${rem(16)});
    color: var(--primary);
`;

export const TaskAction = styled(a.span)`
    position: relative;
    width: 100%;
    height: 100%;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    z-index: inherit;

    &:not(:nth-child(2)) {
        justify-content: center;
    }
    &:nth-child(2){
        padding-inline: ${em(8)};
    }
`;
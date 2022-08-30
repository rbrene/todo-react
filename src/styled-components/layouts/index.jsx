import styled from 'styled-components';
import { rem, em } from '../../helpers/units';
import { animated as a } from '@react-spring/web';


export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const Grid = styled(Container)`
    display: grid;
    grid-template-rows: ${em(180)} 1fr;
`;


export const HeadingRow = styled(Container)`
    grid-row: 1;
`;

export const HeadingRowWrapper = styled(a.div)`
    position: relative;
    max-width: ${rem(480)};
    height: 100%;
    margin-inline: auto;
    /* background: indigo;
    color: white; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${rem(16)};
`;

export const TasksRow = styled(Container)`
    grid-row: 2;
    padding-block: ${rem(32)};
    background: #232121;
`;

export const TasksRowWrapper = styled(a.div)`
    position: relative;
    max-width: ${rem(480)};
    height: 100%;
    margin-inline: auto;
    background: #fff;
    border-radius: ${rem(8)};
    z-index: inherit;

    ul {
        list-style: none;
    }
`;

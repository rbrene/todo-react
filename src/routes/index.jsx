import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../helpers/context';
import { lightMode, darkMode } from '../helpers/themes';
import { Routes as Switch, Route } from 'react-router-dom';
import { Container } from '../styled-components/layouts/index';
import Tasks from './tasks/index';


export default function Routes() {
    const { theme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
            <Container>
                <Switch>
                    <Route exact path='/' element={<Tasks />} />
                </Switch>
            </Container>
        </ThemeProvider>
    )
}

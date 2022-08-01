import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Container } from '../styled-components/layouts/index';
import Tasks from './tasks/index';


export default function Routes() {
    return (
        <Container>
            <Switch>
                <Route exact path='/' element={<Tasks />} />
            </Switch>
        </Container>
    )
}

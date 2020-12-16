import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';
import HomePage from '../pages/HomePage';

export default function MainLayout() {
    let {path} = useRouteMatch();

    return (<>
        <header>Ini Header</header>
        <main>
            <Switch>
                <Route exact path={path}>
                    Home &gt; Home
                    <HomePage></HomePage>
                </Route>
            </Switch>
        </main>
        <footer>Ini Footer</footer>
    </>)
}
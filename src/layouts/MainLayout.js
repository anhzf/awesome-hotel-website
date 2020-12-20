import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';
import Navigation from '../components/Navigation';
import HomePage from '../pages/HomePage';

const routes = [
    {
        name: 'Homepage',
        path: '/',
        component: <HomePage></HomePage>
    }
]

export default function MainLayout() {
    let {path} = useRouteMatch();

    return (<>
        <Navigation />
        <Switch>
            {routes.map((route, i) => (
                <Route exact path={`${path}${route.path}`} key={i}>
                    {route.component}
                </Route>
            ))}
        </Switch>
        <footer>Ini Footer</footer>
    </>)
}
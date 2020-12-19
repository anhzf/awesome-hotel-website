import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';
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
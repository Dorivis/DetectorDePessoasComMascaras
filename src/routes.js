import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detection from './pages/Detection';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detection" component={Detection} />
        </Switch>
    );
}
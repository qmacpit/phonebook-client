import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './components/app';
import About from './components/about';

var appRouter = (
    <Router history={browserHistory}>
        <Route path="/" component={App} />                    
        <Route path="/about" component={About} />                    
    </Router>
);

export default appRouter;
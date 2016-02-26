import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './components/app';
import Details from './components/details';
import About from './components/about';
import Add from './components/add';

var appRouter = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/add" component={Add} />  
        </Route>
        <Route path="/details/:contactId" component={Details} />                    
        <Route path="/about" component={About} />                    
    </Router>
);

export default appRouter;
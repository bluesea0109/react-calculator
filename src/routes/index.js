import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Calc } from 'pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/calc' />} />
      <Route path='/calc' component={Calc} />
    </Switch>
  </Router>
);

export default Routes;

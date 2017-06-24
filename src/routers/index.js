import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodayView from '../views/TodayView';
import DefinitionView from '../views/DefinitionView';
import RandomView from '../views/RandomView';

const AppRouter = () => (
  <Switch>
    <Route exact={true} path="/" component={TodayView}>
    </Route>
    <Route path="/definition" component={DefinitionView}>
    </Route>
    <Route path="/random" component={RandomView}>
    </Route>
  </Switch>
);

export default AppRouter;
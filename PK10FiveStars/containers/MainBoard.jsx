// @flow

import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainPage from './MainPage';
import TwoPage from './TwoPage';

export default function () {
  return (
    <Switch>
      <Route path="/main" component={MainPage} />
      <Route path="/two" component={TwoPage} />
      <Redirect to="/main" />
    </Switch>
  );
}

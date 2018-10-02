// @flow

import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainPage from './MainPage';
import TwoPage from './TwoPage';
import OtherPage from './OtherPage';

export default function () {
  return (
    <Switch>
      <Route path="/main" component={MainPage} />
      <Route path="/two" component={TwoPage} />
      <Route path="/other" component={OtherPage} />
      <Redirect to="/main" />
    </Switch>
  );
}

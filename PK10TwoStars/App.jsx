// @flow

import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { MemoryRouter } from 'react-router';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MainBoard from './containers/MainBoard';

function App({
  store,
}: any) {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <Fragment>
          <Switch>
            <Route path="/" component={MainBoard} />
          </Switch>
        </Fragment>
      </MemoryRouter>
    </Provider>
  );
}

export default hot(module)(App);

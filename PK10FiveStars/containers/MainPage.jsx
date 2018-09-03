// @flow

import React, { PureComponent } from 'react';
import {
  reduxForm,
} from 'redux-form';
import initNumberPool from '../helper/init';
import { MAIN_FORM } from '../shared/form';

const styles = {
  wrapper: {
    padding: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
  },
};

type Props = {
  handleSubmit: Function,
}

class MainPage extends PureComponent<Props> {
  static ACTIONS = [

  ];

  submit(options) {
    console.log(options);
  }

  render() {
    const {
      handleSubmit,
    } = this.props;

    return (
      <form style={styles.wrapper} onSubmit={handleSubmit(d => this.submit(d))}>
        <h2>YOOOO</h2>
      </form>
    );
  }
}

const formHook = reduxForm({
  form: MAIN_FORM,
  destroyOnUnmount: false,
});

export default formHook(MainPage);

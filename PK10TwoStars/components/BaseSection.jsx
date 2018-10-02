// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import {
  Field,
  change,
} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MAIN_FORM } from '../shared/form';
import TextArea from './Form/TextArea.jsx';

const styles = {
  wrapper: {
    width: 200,
    flex: 1,
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '22px 8px 12px 8px',
    margin: '0 8px',
    borderWidth: '0 1px 1px 1px',
    borderColor: '#4a4a4a',
    borderStyle: 'solid',
  },
  titleWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '1px 1px 0 1px',
    borderColor: '#4a4a4a',
    borderStyle: 'solid',
    backgroundColor: '#c5d9f9',
  },
  title: {
    fontSize: 13,
    letterSpacing: 1,
    color: '#4a4a4a',
  },
};

class BaseSection extends PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleWrapper}>
          <span style={styles.title}>大底号码</span>
        </div>
        <Field
          name="base"
          placeholder="大底号码，双击清空"
          component={TextArea} />
      </div>
    );
  }
}

const reduxHook = connect(
  () => ({

  }),
  dispatch => bindActionCreators({
    changeField: value => change(MAIN_FORM, 'base', value),
  }, dispatch),
);

export default reduxHook(radium(BaseSection));

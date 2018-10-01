// @flow

import React, { PureComponent } from 'react';
import { clipboard } from 'electron';
import radium from 'radium';
import {
  Field,
  change,
  formValueSelector,
} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MAIN_FORM } from '../shared/form';
import TextArea from './Form/TextArea.jsx';

const selector = formValueSelector(MAIN_FORM);

const styles = {
  wrapper: {
    width: 200,
    flex: 1,
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '22px 8px 12px 8px',
    margin: '0 8px',
    borderWidth: '0 1px 1px 1px',
    borderColor: '#4a4a4a',
    borderStyle: 'solid',
  },
  title: {
    fontSize: 13,
    letterSpacing: 1,
    color: '#4a4a4a',
    margin: '0 0 2px 6px',
  },
  numberText: {
    fontSize: 13,
    letterSpacing: 1,
    color: '#4a4a4a',
    margin: '6px 0',
  },
  btnWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    flex: 1,
    border: '1px solid #4a4a4a',
    padding: '6px 8px',
    margin: '0 1px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    color: '#4a4a4a',
    ':hover': {
      backgroundColor: '#eaeaea',
    },
    ':active': {
      boxShadow: '0 1px #666',
      transform: 'translateY(1px)',
    },
  },
};

type Props = {
  changeField: Function,
  baseLength: number,
}

class BaseSection extends PureComponent<Props> {
  render() {
    const {
      changeField,
      baseLength,
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <Field
          name="base"
          placeholder="大底号码，双击清空"
          component={TextArea} />
        <div style={styles.btnWrapper}>
          <span style={styles.numberText}>
            {`${baseLength}注`}
          </span>
          <div style={styles.buttonsWrapper}>
            <button
              type="button"
              key="paste"
              style={styles.actionBtn}
              onClick={() => changeField(clipboard.readText())}>
              贴
            </button>
            <button
              type="button"
              key="clear"
              style={styles.actionBtn}
              onClick={() => changeField('')}>
              清
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    baseLength: selector(state, 'base').split(/[\n(\r\n)]/).filter(t => t).length,
  }),
  dispatch => bindActionCreators({
    changeField: value => change(MAIN_FORM, 'base', value),
  }, dispatch),
);

export default reduxHook(radium(BaseSection));

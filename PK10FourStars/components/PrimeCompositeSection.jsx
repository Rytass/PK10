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
import CheckBox from './Form/CheckBox';

const styles = {
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '12px 8px 8px 8px',
    border: '1px solid #4a4a4a',
    margin: '4px 4px 0 4px',
  },
  titleLine: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
  },
  formWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '8px 0',
  },
  boxWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  clearBtn: {
    border: '1px solid #4a4a4a',
    padding: '0 8px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    margin: '0 2px',
    color: '#4a4a4a',
    ':hover': {
      backgroundColor: '#eaeaea',
    },
    ':active': {
      boxShadow: '0 1px #666',
      transform: 'translateY(1px)',
    },
  },
  allBtn: {
    border: '1px solid #4a4a4a',
    padding: '0 8px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    margin: '0 2px',
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
}

class PrimeCompositeSection extends PureComponent<Props> {
  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('pppp', false);
    changeField('ppcp', false);
    changeField('pcpp', false);
    changeField('pccp', false);
    changeField('pppc', false);
    changeField('ppcc', false);
    changeField('pcpc', false);
    changeField('pccc', false);
    changeField('cppp', false);
    changeField('cpcp', false);
    changeField('ccpp', false);
    changeField('cccp', false);
    changeField('cppc', false);
    changeField('cpcc', false);
    changeField('ccpc', false);
    changeField('cccc', false);
  }

  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('pppp', true);
    changeField('ppcp', true);
    changeField('pcpp', true);
    changeField('pccp', true);
    changeField('pppc', true);
    changeField('ppcc', true);
    changeField('pcpc', true);
    changeField('pccc', true);
    changeField('cppp', true);
    changeField('cpcp', true);
    changeField('ccpp', true);
    changeField('cccp', true);
    changeField('cppc', true);
    changeField('cpcc', true);
    changeField('ccpc', true);
    changeField('cccc', true);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleLine}>
          <span style={styles.title}>【杀质合】</span>
          <button
            type="button"
            key="all"
            onClick={() => this.allValue()}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="clear"
            onClick={() => this.clearValue()}
            style={styles.clearBtn}>
            清
          </button>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="pppp"
              label="质质质质"
              component={CheckBox} />
            <Field
              name="ppcp"
              label="质质合质"
              component={CheckBox} />
            <Field
              name="pcpp"
              label="质合质质"
              component={CheckBox} />
            <Field
              name="pccp"
              label="质合合质"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="pppc"
              label="质质质合"
              component={CheckBox} />
            <Field
              name="ppcc"
              label="质质合合"
              component={CheckBox} />
            <Field
              name="pcpc"
              label="质合质合"
              component={CheckBox} />
            <Field
              name="pccc"
              label="质合合合"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="cppp"
              label="合质质质"
              component={CheckBox} />
            <Field
              name="cpcp"
              label="合质合质"
              component={CheckBox} />
            <Field
              name="ccpp"
              label="合合质质"
              component={CheckBox} />
            <Field
              name="cccp"
              label="合合合质"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="cppc"
              label="合质质合"
              component={CheckBox} />
            <Field
              name="cpcc"
              label="合质合合"
              component={CheckBox} />
            <Field
              name="ccpc"
              label="合合质合"
              component={CheckBox} />
            <Field
              name="cccc"
              label="合合合合"
              component={CheckBox} />
          </div>
        </div>
      </div>
    );
  }
}

const reduxHook = connect(
  () => ({

  }),
  dispatch => bindActionCreators({
    changeField: (field, value) => change(MAIN_FORM, field, value),
  }, dispatch),
);

export default reduxHook(radium(PrimeCompositeSection));

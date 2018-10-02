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

class OddEvenSection extends PureComponent<Props> {
  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('oooo', false);
    changeField('ooeo', false);
    changeField('oeoo', false);
    changeField('oeeo', false);
    changeField('oooe', false);
    changeField('ooee', false);
    changeField('oeoe', false);
    changeField('oeee', false);
    changeField('eooo', false);
    changeField('eoeo', false);
    changeField('eeoo', false);
    changeField('eeeo', false);
    changeField('eooe', false);
    changeField('eoee', false);
    changeField('eeoe', false);
    changeField('eeee', false);
  }

  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('oooo', true);
    changeField('ooeo', true);
    changeField('oeoo', true);
    changeField('oeeo', true);
    changeField('oooe', true);
    changeField('ooee', true);
    changeField('oeoe', true);
    changeField('oeee', true);
    changeField('eooo', true);
    changeField('eoeo', true);
    changeField('eeoo', true);
    changeField('eeeo', true);
    changeField('eooe', true);
    changeField('eoee', true);
    changeField('eeoe', true);
    changeField('eeee', true);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleLine}>
          <span style={styles.title}>【杀奇偶】</span>
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
              name="oooo"
              label="奇奇奇奇"
              component={CheckBox} />
            <Field
              name="ooeo"
              label="奇奇偶奇"
              component={CheckBox} />
            <Field
              name="oeoo"
              label="奇偶奇奇"
              component={CheckBox} />
            <Field
              name="oeeo"
              label="奇偶偶奇"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="oooe"
              label="奇奇奇偶"
              component={CheckBox} />
            <Field
              name="ooee"
              label="奇奇偶偶"
              component={CheckBox} />
            <Field
              name="oeoe"
              label="奇偶奇偶"
              component={CheckBox} />
            <Field
              name="oeee"
              label="奇偶偶偶"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="eooo"
              label="偶奇奇奇"
              component={CheckBox} />
            <Field
              name="eoeo"
              label="偶奇偶奇"
              component={CheckBox} />
            <Field
              name="eeoo"
              label="偶偶奇奇"
              component={CheckBox} />
            <Field
              name="eeeo"
              label="偶偶偶奇"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="eooe"
              label="偶奇奇偶"
              component={CheckBox} />
            <Field
              name="eoee"
              label="偶奇偶偶"
              component={CheckBox} />
            <Field
              name="eeoe"
              label="偶偶奇偶"
              component={CheckBox} />
            <Field
              name="eeee"
              label="偶偶偶偶"
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

export default reduxHook(radium(OddEvenSection));

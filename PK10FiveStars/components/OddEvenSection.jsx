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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '12px 8px 8px 8px',
    border: '1px solid #4a4a4a',
    margin: '4px 8px 8px 8px',
  },
  titleLine: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '5px 0',
  },
  boxWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  clearBtn: {
    border: '1px solid #4a4a4a',
    padding: '0 16px',
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
    padding: '0 16px',
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

    changeField('ooooo', false);
    changeField('ooooe', false);
    changeField('oooeo', false);
    changeField('oooee', false);
    changeField('ooeoo', false);
    changeField('ooeoe', false);
    changeField('ooeeo', false);
    changeField('ooeee', false);
    changeField('oeooo', false);
    changeField('oeooe', false);
    changeField('oeoeo', false);
    changeField('oeoee', false);
    changeField('oeeoo', false);
    changeField('oeeoe', false);
    changeField('oeeeo', false);
    changeField('oeeee', false);
    changeField('eoooo', false);
    changeField('eoooe', false);
    changeField('eooeo', false);
    changeField('eooee', false);
    changeField('eoeoo', false);
    changeField('eoeoe', false);
    changeField('eoeeo', false);
    changeField('eoeee', false);
    changeField('eeooo', false);
    changeField('eeooe', false);
    changeField('eeoeo', false);
    changeField('eeoee', false);
    changeField('eeeoo', false);
    changeField('eeeoe', false);
    changeField('eeeeo', false);
    changeField('eeeee', false);
  }

  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('ooooo', true);
    changeField('ooooe', true);
    changeField('oooeo', true);
    changeField('oooee', true);
    changeField('ooeoo', true);
    changeField('ooeoe', true);
    changeField('ooeeo', true);
    changeField('ooeee', true);
    changeField('oeooo', true);
    changeField('oeooe', true);
    changeField('oeoeo', true);
    changeField('oeoee', true);
    changeField('oeeoo', true);
    changeField('oeeoe', true);
    changeField('oeeeo', true);
    changeField('oeeee', true);
    changeField('eoooo', true);
    changeField('eoooe', true);
    changeField('eooeo', true);
    changeField('eooee', true);
    changeField('eoeoo', true);
    changeField('eoeoe', true);
    changeField('eoeeo', true);
    changeField('eoeee', true);
    changeField('eeooo', true);
    changeField('eeooe', true);
    changeField('eeoeo', true);
    changeField('eeoee', true);
    changeField('eeeoo', true);
    changeField('eeeoe', true);
    changeField('eeeeo', true);
    changeField('eeeee', true);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleLine}>
          <span>【杀奇偶】</span>
          <button
            type="button"
            key="clear"
            onClick={() => this.clearValue()}
            style={styles.clearBtn}>
            清
          </button>
          <button
            type="button"
            key="all"
            onClick={() => this.allValue()}
            style={styles.allBtn}>
            全
          </button>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="ooooo"
              label="奇奇奇奇奇"
              component={CheckBox} />
            <Field
              name="ooooe"
              label="奇奇奇奇偶"
              component={CheckBox} />
            <Field
              name="oooeo"
              label="奇奇奇偶奇"
              component={CheckBox} />
            <Field
              name="oooee"
              label="奇奇奇偶偶"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="eoooo"
              label="偶奇奇奇奇"
              component={CheckBox} />
            <Field
              name="eoooe"
              label="偶奇奇奇偶"
              component={CheckBox} />
            <Field
              name="eooeo"
              label="偶奇奇偶奇"
              component={CheckBox} />
            <Field
              name="eooee"
              label="偶奇奇偶偶"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="ooeoo"
              label="奇奇偶奇奇"
              component={CheckBox} />
            <Field
              name="ooeoe"
              label="奇奇偶奇偶"
              component={CheckBox} />
            <Field
              name="ooeeo"
              label="奇奇偶偶奇"
              component={CheckBox} />
            <Field
              name="ooeee"
              label="奇奇偶偶偶"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="eoeoo"
              label="偶奇偶奇奇"
              component={CheckBox} />
            <Field
              name="eoeoe"
              label="偶奇偶奇偶"
              component={CheckBox} />
            <Field
              name="eoeeo"
              label="偶奇偶偶奇"
              component={CheckBox} />
            <Field
              name="eoeee"
              label="偶奇偶偶偶"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="oeooo"
              label="奇偶奇奇奇"
              component={CheckBox} />
            <Field
              name="oeooe"
              label="奇偶奇奇偶"
              component={CheckBox} />
            <Field
              name="oeoeo"
              label="奇偶奇偶奇"
              component={CheckBox} />
            <Field
              name="oeoee"
              label="奇偶奇偶偶"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="eeooo"
              label="偶偶奇奇奇"
              component={CheckBox} />
            <Field
              name="eeooe"
              label="偶偶奇奇偶"
              component={CheckBox} />
            <Field
              name="eeoeo"
              label="偶偶奇偶奇"
              component={CheckBox} />
            <Field
              name="eeoee"
              label="偶偶奇偶偶"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="oeeoo"
              label="奇偶偶奇奇"
              component={CheckBox} />
            <Field
              name="oeeoe"
              label="奇偶偶奇偶"
              component={CheckBox} />
            <Field
              name="oeeeo"
              label="奇偶偶偶奇"
              component={CheckBox} />
            <Field
              name="oeeee"
              label="奇偶偶偶偶"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="eeeoo"
              label="偶偶偶奇奇"
              component={CheckBox} />
            <Field
              name="eeeoe"
              label="偶偶偶奇偶"
              component={CheckBox} />
            <Field
              name="eeeeo"
              label="偶偶偶偶奇"
              component={CheckBox} />
            <Field
              name="eeeee"
              label="偶偶偶偶偶"
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

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
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 8px 8px 8px',
    border: '1px solid #4a4a4a',
    margin: '0 4px',
  },
  title: {
    fontSize: 12,
    color: '#4a4a4a',
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
};

type Props = {
  changeField: Function,
}

class SpecialSection extends PureComponent<Props> {
  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('noContinuous', false);
    changeField('twoContinuous', false);
    changeField('threeContinuous', false);
    changeField('fourContinuous', false);
    changeField('fiveContinuous', false);
    changeField('uphill', false);
    changeField('downhill', false);
    changeField('convex', false);
    changeField('concave', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.title}>【特別排除】</span>
        <Field
          name="noContinuous"
          label="不连"
          component={CheckBox} />
        <Field
          name="twoContinuous"
          label="二连"
          component={CheckBox} />
        <Field
          name="threeContinuous"
          label="三连"
          component={CheckBox} />
        <Field
          name="fourContinuous"
          label="四连"
          component={CheckBox} />
        <Field
          name="fiveContinuous"
          label="五连"
          component={CheckBox} />
        <Field
          name="uphill"
          label="上山"
          component={CheckBox} />
        <Field
          name="downhill"
          label="下山"
          component={CheckBox} />
        <Field
          name="convex"
          label="凸型"
          component={CheckBox} />
        <Field
          name="concave"
          label="凹型"
          component={CheckBox} />
        <button
          type="button"
          key="clear"
          onClick={() => this.clearValue()}
          style={styles.clearBtn}>
          清
        </button>
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

export default reduxHook(radium(SpecialSection));

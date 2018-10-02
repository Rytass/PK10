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

class BigSmallSection extends PureComponent<Props> {
  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('bbbb', false);
    changeField('bbsb', false);
    changeField('bsbb', false);
    changeField('bssb', false);
    changeField('bbbs', false);
    changeField('bbss', false);
    changeField('bsbs', false);
    changeField('bsss', false);
    changeField('sbbb', false);
    changeField('sbsb', false);
    changeField('ssbb', false);
    changeField('sssb', false);
    changeField('sbbs', false);
    changeField('sbss', false);
    changeField('ssbs', false);
    changeField('ssss', false);
  }

  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('bbbb', true);
    changeField('bbsb', true);
    changeField('bsbb', true);
    changeField('bssb', true);
    changeField('bbbs', true);
    changeField('bbss', true);
    changeField('bsbs', true);
    changeField('bsss', true);
    changeField('sbbb', true);
    changeField('sbsb', true);
    changeField('ssbb', true);
    changeField('sssb', true);
    changeField('sbbs', true);
    changeField('sbss', true);
    changeField('ssbs', true);
    changeField('ssss', true);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleLine}>
          <span style={styles.title}>【杀大小】</span>
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
              name="bbbb"
              label="大大大大"
              component={CheckBox} />
            <Field
              name="bbsb"
              label="大大小大"
              component={CheckBox} />
            <Field
              name="bsbb"
              label="大小大大"
              component={CheckBox} />
            <Field
              name="bssb"
              label="大小小大"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="bbbs"
              label="大大大小"
              component={CheckBox} />
            <Field
              name="bbss"
              label="大大小小"
              component={CheckBox} />
            <Field
              name="bsbs"
              label="大小大小"
              component={CheckBox} />
            <Field
              name="bsss"
              label="大小小小"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="sbbb"
              label="小大大大"
              component={CheckBox} />
            <Field
              name="sbsb"
              label="小大小大"
              component={CheckBox} />
            <Field
              name="ssbb"
              label="小小大大"
              component={CheckBox} />
            <Field
              name="sssb"
              label="小小小大"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="sbbs"
              label="小大大小"
              component={CheckBox} />
            <Field
              name="sbss"
              label="小大小小"
              component={CheckBox} />
            <Field
              name="ssbs"
              label="小小大小"
              component={CheckBox} />
            <Field
              name="ssss"
              label="小小小小"
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

export default reduxHook(radium(BigSmallSection));

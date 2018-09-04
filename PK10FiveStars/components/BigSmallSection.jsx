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

class BigSmallSection extends PureComponent<Props> {
  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('bbbbb', false);
    changeField('bbbbs', false);
    changeField('bbbsb', false);
    changeField('bbbss', false);
    changeField('bbsbb', false);
    changeField('bbsbs', false);
    changeField('bbssb', false);
    changeField('bbsss', false);
    changeField('bsbbb', false);
    changeField('bsbbs', false);
    changeField('bsbsb', false);
    changeField('bsbss', false);
    changeField('bssbb', false);
    changeField('bssbs', false);
    changeField('bsssb', false);
    changeField('bssss', false);
    changeField('sbbbb', false);
    changeField('sbbbs', false);
    changeField('sbbsb', false);
    changeField('sbbss', false);
    changeField('sbsbb', false);
    changeField('sbsbs', false);
    changeField('sbssb', false);
    changeField('sbsss', false);
    changeField('ssbbb', false);
    changeField('ssbbs', false);
    changeField('ssbsb', false);
    changeField('ssbss', false);
    changeField('sssbb', false);
    changeField('sssbs', false);
    changeField('ssssb', false);
    changeField('sssss', false);
  }

  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('bbbbb', true);
    changeField('bbbbs', true);
    changeField('bbbsb', true);
    changeField('bbbss', true);
    changeField('bbsbb', true);
    changeField('bbsbs', true);
    changeField('bbssb', true);
    changeField('bbsss', true);
    changeField('bsbbb', true);
    changeField('bsbbs', true);
    changeField('bsbsb', true);
    changeField('bsbss', true);
    changeField('bssbb', true);
    changeField('bssbs', true);
    changeField('bsssb', true);
    changeField('bssss', true);
    changeField('sbbbb', true);
    changeField('sbbbs', true);
    changeField('sbbsb', true);
    changeField('sbbss', true);
    changeField('sbsbb', true);
    changeField('sbsbs', true);
    changeField('sbssb', true);
    changeField('sbsss', true);
    changeField('ssbbb', true);
    changeField('ssbbs', true);
    changeField('ssbsb', true);
    changeField('ssbss', true);
    changeField('sssbb', true);
    changeField('sssbs', true);
    changeField('ssssb', true);
    changeField('sssss', true);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleLine}>
          <span style={styles.title}>【杀大小】</span>
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
              name="bbbbb"
              label="大大大大大"
              component={CheckBox} />
            <Field
              name="bbbbs"
              label="大大大大小"
              component={CheckBox} />
            <Field
              name="bbbsb"
              label="大大大小大"
              component={CheckBox} />
            <Field
              name="bbbss"
              label="大大大小小"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="sbbbb"
              label="小大大大大"
              component={CheckBox} />
            <Field
              name="sbbbs"
              label="小大大大小"
              component={CheckBox} />
            <Field
              name="sbbsb"
              label="小大大小大"
              component={CheckBox} />
            <Field
              name="sbbss"
              label="小大大小小"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="bbsbb"
              label="大大小大大"
              component={CheckBox} />
            <Field
              name="bbsbs"
              label="大大小大小"
              component={CheckBox} />
            <Field
              name="bbssb"
              label="大大小小大"
              component={CheckBox} />
            <Field
              name="bbsss"
              label="大大小小小"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="sbsbb"
              label="小大小大大"
              component={CheckBox} />
            <Field
              name="sbsbs"
              label="小大小大小"
              component={CheckBox} />
            <Field
              name="sbssb"
              label="小大小小大"
              component={CheckBox} />
            <Field
              name="sbsss"
              label="小大小小小"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="bsbbb"
              label="大小大大大"
              component={CheckBox} />
            <Field
              name="bsbbs"
              label="大小大大小"
              component={CheckBox} />
            <Field
              name="bsbsb"
              label="大小大小大"
              component={CheckBox} />
            <Field
              name="bsbss"
              label="大小大小小"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="ssbbb"
              label="小小大大大"
              component={CheckBox} />
            <Field
              name="ssbbs"
              label="小小大大小"
              component={CheckBox} />
            <Field
              name="ssbsb"
              label="小小大小大"
              component={CheckBox} />
            <Field
              name="ssbss"
              label="小小大小小"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="bssbb"
              label="大小小大大"
              component={CheckBox} />
            <Field
              name="bssbs"
              label="大小小大小"
              component={CheckBox} />
            <Field
              name="bsssb"
              label="大小小小大"
              component={CheckBox} />
            <Field
              name="bssss"
              label="大小小小小"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="sssbb"
              label="小小小大大"
              component={CheckBox} />
            <Field
              name="sssbs"
              label="小小小大小"
              component={CheckBox} />
            <Field
              name="ssssb"
              label="小小小小大"
              component={CheckBox} />
            <Field
              name="sssss"
              label="小小小小小"
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

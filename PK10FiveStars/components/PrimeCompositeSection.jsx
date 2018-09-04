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

class PrimeCompositeSection extends PureComponent<Props> {
  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('ppppp', false);
    changeField('ppppc', false);
    changeField('pppcp', false);
    changeField('pppcc', false);
    changeField('ppcpp', false);
    changeField('ppcpc', false);
    changeField('ppccp', false);
    changeField('ppccc', false);
    changeField('pcppp', false);
    changeField('pcppc', false);
    changeField('pcpcp', false);
    changeField('pcpcc', false);
    changeField('pccpp', false);
    changeField('pccpc', false);
    changeField('pcccp', false);
    changeField('pcccc', false);
    changeField('cpppp', false);
    changeField('cpppc', false);
    changeField('cppcp', false);
    changeField('cppcc', false);
    changeField('cpcpp', false);
    changeField('cpcpc', false);
    changeField('cpccp', false);
    changeField('cpccc', false);
    changeField('ccppp', false);
    changeField('ccppc', false);
    changeField('ccpcp', false);
    changeField('ccpcc', false);
    changeField('cccpp', false);
    changeField('cccpc', false);
    changeField('ccccp', false);
    changeField('ccccc', false);
  }

  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('ppppp', true);
    changeField('ppppc', true);
    changeField('pppcp', true);
    changeField('pppcc', true);
    changeField('ppcpp', true);
    changeField('ppcpc', true);
    changeField('ppccp', true);
    changeField('ppccc', true);
    changeField('pcppp', true);
    changeField('pcppc', true);
    changeField('pcpcp', true);
    changeField('pcpcc', true);
    changeField('pccpp', true);
    changeField('pccpc', true);
    changeField('pcccp', true);
    changeField('pcccc', true);
    changeField('cpppp', true);
    changeField('cpppc', true);
    changeField('cppcp', true);
    changeField('cppcc', true);
    changeField('cpcpp', true);
    changeField('cpcpc', true);
    changeField('cpccp', true);
    changeField('cpccc', true);
    changeField('ccppp', true);
    changeField('ccppc', true);
    changeField('ccpcp', true);
    changeField('ccpcc', true);
    changeField('cccpp', true);
    changeField('cccpc', true);
    changeField('ccccp', true);
    changeField('ccccc', true);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleLine}>
          <span>【杀质合】</span>
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
              name="ppppp"
              label="质质质质质"
              component={CheckBox} />
            <Field
              name="ppppc"
              label="质质质质合"
              component={CheckBox} />
            <Field
              name="pppcp"
              label="质质质合质"
              component={CheckBox} />
            <Field
              name="pppcc"
              label="质质质合合"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="cpppp"
              label="合质质质质"
              component={CheckBox} />
            <Field
              name="cpppc"
              label="合质质质合"
              component={CheckBox} />
            <Field
              name="cppcp"
              label="合质质合质"
              component={CheckBox} />
            <Field
              name="cppcc"
              label="合质质合合"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="ppcpp"
              label="质质合质质"
              component={CheckBox} />
            <Field
              name="ppcpc"
              label="质质合质合"
              component={CheckBox} />
            <Field
              name="ppccp"
              label="质质合合质"
              component={CheckBox} />
            <Field
              name="ppccc"
              label="质质合合合"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="cpcpp"
              label="合质合质质"
              component={CheckBox} />
            <Field
              name="cpcpc"
              label="合质合质合"
              component={CheckBox} />
            <Field
              name="cpccp"
              label="合质合合质"
              component={CheckBox} />
            <Field
              name="cpccc"
              label="合质合合合"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="pcppp"
              label="质合质质质"
              component={CheckBox} />
            <Field
              name="pcppc"
              label="质合质质合"
              component={CheckBox} />
            <Field
              name="pcpcp"
              label="质合质合质"
              component={CheckBox} />
            <Field
              name="pcpcc"
              label="质合质合合"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="ccppp"
              label="合合质质质"
              component={CheckBox} />
            <Field
              name="ccppc"
              label="合合质质合"
              component={CheckBox} />
            <Field
              name="ccpcp"
              label="合合质合质"
              component={CheckBox} />
            <Field
              name="ccpcc"
              label="合合质合合"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.formWrapper}>
          <div style={styles.boxWrapper}>
            <Field
              name="pccpp"
              label="质合合质质"
              component={CheckBox} />
            <Field
              name="pccpc"
              label="质合合质合"
              component={CheckBox} />
            <Field
              name="pcccp"
              label="质合合合质"
              component={CheckBox} />
            <Field
              name="pcccc"
              label="质合合合合"
              component={CheckBox} />
          </div>
          <div style={styles.boxWrapper}>
            <Field
              name="cccpp"
              label="合合合质质"
              component={CheckBox} />
            <Field
              name="cccpc"
              label="合合合质合"
              component={CheckBox} />
            <Field
              name="ccccp"
              label="合合合合质"
              component={CheckBox} />
            <Field
              name="ccccc"
              label="合合合合合"
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

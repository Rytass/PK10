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
import BooleanButton from './Form/BooleanButton';

const styles = {
  wrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '12px 8px 8px 8px',
    border: '1px solid #4a4a4a',
    margin: '4px 8px 8px 8px',
  },
  lineWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '2px 0',
  },
  button: {
    width: 45,
    margin: '0 1px',
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
    margin: '0 12px 0 0',
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

class TypeSection extends PureComponent<Props> {
  allValue(type) {
    const {
      changeField,
    } = this.props;

    changeField(`${type}Zero`, true);
    changeField(`${type}One`, true);
    changeField(`${type}Two`, true);
    changeField(`${type}Three`, true);
    changeField(`${type}Four`, true);
    changeField(`${type}Five`, true);
  }

  clearValue(type) {
    const {
      changeField,
    } = this.props;

    changeField(`${type}Zero`, false);
    changeField(`${type}One`, false);
    changeField(`${type}Two`, false);
    changeField(`${type}Three`, false);
    changeField(`${type}Four`, false);
    changeField(`${type}Five`, false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【型态个数】</span>
        </div>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>大号数</span>
          <Field
            name="bigTypeZero"
            text="0"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigTypeOne"
            text="1"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigTypeTwo"
            text="2"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigTypeThree"
            text="3"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigTypeFour"
            text="4"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigTypeFive"
            text="5"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <button
            type="button"
            key="all"
            onClick={() => this.allValue('bigType')}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="clear"
            onClick={() => this.clearValue('bigType')}
            style={styles.clearBtn}>
            清
          </button>
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

export default reduxHook(radium(TypeSection));

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
    justifyContent: 'center',
    padding: '12px 8px 8px 8px',
    border: '1px solid #4a4a4a',
    margin: '4px 8px 8px 8px',
  },
  main: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  fieldWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lineWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '4px 0',
  },
  button: {
    width: 40,
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
    margin: '0 2px 0 20px',
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
    margin: '0 2px 0 20px',
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

class KillSumSection extends PureComponent<Props> {
  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('killSumThree', true);
    changeField('killSumFour', true);
    changeField('killSumFive', true);
    changeField('killSumSix', true);
    changeField('killSumSeven', true);
    changeField('killSumEight', true);
    changeField('killSumNine', true);
    changeField('killSumTen', true);
    changeField('killSumEleven', true);
    changeField('killSumTwelve', true);
    changeField('killSumThirteen', true);
    changeField('killSumFourteen', true);
    changeField('killSumFifteen', true);
    changeField('killSumSixteen', true);
    changeField('killSumSeventeen', true);
    changeField('killSumEighteen', true);
    changeField('killSumNineteen', true);
  }

  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('killSumThree', false);
    changeField('killSumFour', false);
    changeField('killSumFive', false);
    changeField('killSumSix', false);
    changeField('killSumSeven', false);
    changeField('killSumEight', false);
    changeField('killSumNine', false);
    changeField('killSumTen', false);
    changeField('killSumEleven', false);
    changeField('killSumTwelve', false);
    changeField('killSumThirteen', false);
    changeField('killSumFourteen', false);
    changeField('killSumFifteen', false);
    changeField('killSumSixteen', false);
    changeField('killSumSeventeen', false);
    changeField('killSumEighteen', false);
    changeField('killSumNineteen', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【杀和值】</span>
        </div>
        <div style={styles.main}>
          <div style={styles.fieldWrapper}>
            <div style={styles.lineWrapper}>
              <Field
                name="killSumThree"
                text="03"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumFour"
                text="04"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumFive"
                text="05"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumSix"
                text="06"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumSeven"
                text="07"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumEight"
                text="08"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumNine"
                text="09"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumTen"
                text="10"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumEleven"
                text="11"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <button
                type="button"
                key="all"
                onClick={() => this.allValue()}
                style={styles.allBtn}>
                全
              </button>
            </div>
            <div style={styles.lineWrapper}>
              <Field
                name="killSumTwelve"
                text="12"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumThirteen"
                text="13"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumFourteen"
                text="14"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumFifteen"
                text="15"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumSixteen"
                text="16"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumSeventeen"
                text="17"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumEighteen"
                text="18"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumNineteen"
                text="19"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <div style={styles.button} />
              <button
                type="button"
                key="clear"
                onClick={() => this.clearValue()}
                style={styles.clearBtn}>
                清
              </button>
            </div>
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

export default reduxHook(radium(KillSumSection));

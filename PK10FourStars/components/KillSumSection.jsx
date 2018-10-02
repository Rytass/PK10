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
    flex: 1,
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
    changeField('killSumTwenty', true);
    changeField('killSumTwentyOne', true);
    changeField('killSumTwentyTwo', true);
    changeField('killSumTwentyThree', true);
    changeField('killSumTwentyFour', true);
    changeField('killSumTwentyFive', true);
    changeField('killSumTwentySix', true);
    changeField('killSumTwentySeven', true);
    changeField('killSumTwentyEight', true);
    changeField('killSumTwentyNine', true);
    changeField('killSumThirty', true);
    changeField('killSumThirtyOne', true);
    changeField('killSumThirtyTwo', true);
    changeField('killSumThirtyThree', true);
    changeField('killSumThirtyFour', true);
  }

  clearValue() {
    const {
      changeField,
    } = this.props;

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
    changeField('killSumTwenty', false);
    changeField('killSumTwentyOne', false);
    changeField('killSumTwentyTwo', false);
    changeField('killSumTwentyThree', false);
    changeField('killSumTwentyFour', false);
    changeField('killSumTwentyFive', false);
    changeField('killSumTwentySix', false);
    changeField('killSumTwentySeven', false);
    changeField('killSumTwentyEight', false);
    changeField('killSumTwentyNine', false);
    changeField('killSumThirty', false);
    changeField('killSumThirtyOne', false);
    changeField('killSumThirtyTwo', false);
    changeField('killSumThirtyThree', false);
    changeField('killSumThirtyFour', false);
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
                name="killSumTen"
                text="10"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumEleven"
                text="11"
                buttonstyle={styles.button}
                component={BooleanButton} />
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
              <Field
                name="killSumTwenty"
                text="20"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumTwentyOne"
                text="21"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumTwentyTwo"
                text="22"
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
                name="killSumTwentyThree"
                text="23"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumTwentyFour"
                text="24"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumTwentyFive"
                text="25"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumTwentySix"
                text="26"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumTwentySeven"
                text="27"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumTwentyEight"
                text="28"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumTwentyNine"
                text="29"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumThirty"
                text="30"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumThirtyOne"
                text="31"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumThirtyTwo"
                text="32"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumThirtyThree"
                text="33"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killSumThirtyFour"
                text="34"
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

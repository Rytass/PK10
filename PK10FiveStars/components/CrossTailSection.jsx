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
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
  },
  button: {
    width: 25,
    margin: '0 1px',
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
    margin: '0 2px 0 24px',
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

class CrossTailSection extends PureComponent<Props> {
  crossAllValue() {
    const {
      changeField,
    } = this.props;

    changeField('crossFour', true);
    changeField('crossFive', true);
    changeField('crossSix', true);
    changeField('crossSeven', true);
    changeField('crossEight', true);
    changeField('crossNine', true);
  }

  crossClearValue() {
    const {
      changeField,
    } = this.props;

    changeField('crossFour', false);
    changeField('crossFive', false);
    changeField('crossSix', false);
    changeField('crossSeven', false);
    changeField('crossEight', false);
    changeField('crossNine', false);
  }

  tailAllValue() {
    const {
      changeField,
    } = this.props;

    changeField('tailZero', true);
    changeField('tailOne', true);
    changeField('tailTwo', true);
    changeField('tailThree', true);
    changeField('tailFour', true);
    changeField('tailFive', true);
    changeField('tailSix', true);
    changeField('tailSeven', true);
    changeField('tailEight', true);
    changeField('tailNine', true);
  }

  tailClearValue() {
    const {
      changeField,
    } = this.props;

    changeField('tailZero', false);
    changeField('tailOne', false);
    changeField('tailTwo', false);
    changeField('tailThree', false);
    changeField('tailFour', false);
    changeField('tailFive', false);
    changeField('tailSix', false);
    changeField('tailSeven', false);
    changeField('tailEight', false);
    changeField('tailNine', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【杀跨度】</span>
          <div style={styles.button} />
          <div style={styles.button} />
          <div style={styles.button} />
          <div style={styles.button} />
          <Field
            name="crossFour"
            text="4"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="crossFive"
            text="5"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="crossSix"
            text="6"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="crossSeven"
            text="7"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="crossEight"
            text="8"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="crossNine"
            text="9"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <button
            type="button"
            key="crossAll"
            onClick={() => this.crossAllValue()}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="crossClear"
            onClick={() => this.crossClearValue()}
            style={styles.clearBtn}>
            清
          </button>
        </div>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【杀和尾】</span>
          <Field
            name="tailZero"
            text="0"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="tailOne"
            text="1"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="tailTwo"
            text="2"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="tailThree"
            text="3"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="tailFour"
            text="4"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="tailFive"
            text="5"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="tailSix"
            text="6"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="tailSeven"
            text="7"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="tailEight"
            text="8"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="tailNine"
            text="9"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <button
            type="button"
            key="tailAll"
            onClick={() => this.tailAllValue()}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="tailClear"
            onClick={() => this.tailClearValue()}
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

export default reduxHook(radium(CrossTailSection));

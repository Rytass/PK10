// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import {
  Field,
  change,
  formValueSelector,
} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MAIN_FORM } from '../shared/form';
import TextArea from './Form/TextArea';
import ZeroOneTwoActionBtn from './Elements/ZeroOneTwoActionBtn';

const selector = formValueSelector(MAIN_FORM);

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
    margin: '0 12px 0 0',
  },
  main: {
    height: 150,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  actionWrapper: {
    flex: 1.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0 0 0 24px',
  },
  button: {
    alignSelf: 'stretch',
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
  marginLet: {
    margin: '0 0 0 16px',
  },
};

type Props = {
  zeroOneTwo: string,
  changeField: Function,
}

class ZeroOneTwoSection extends PureComponent<Props> {
  state = {
    tenThousands: null,
    thousands: null,
    hundreds: null,
    tens: null,
    ones: null,
  }

  addForm() {
    const {
      zeroOneTwo,
      changeField,
    } = this.props;

    const {
      tenThousands,
      thousands,
      hundreds,
      tens,
      ones,
    } = this.state;

    if (tenThousands && thousands && hundreds && tens && ones) {
      const targetNumber = `${tenThousands}${thousands}${hundreds}${tens}${ones} `;

      changeField(`${zeroOneTwo}${targetNumber}`);
    } else {
      alert('五个位置 每个都必须选择一个路数！');
    }
  }

  render() {
    const {
      tenThousands,
      thousands,
      hundreds,
      tens,
      ones,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【杀012路】</span>
        </div>
        <div style={styles.main}>
          <Field
            name="zeroOneTwo"
            component={TextArea} />
          <div style={styles.actionWrapper}>
            <ZeroOneTwoActionBtn
              title="万位"
              thisNum={tenThousands}
              setNumber={num => this.setState({ tenThousands: num })} />
            <ZeroOneTwoActionBtn
              title="千位"
              thisNum={thousands}
              setNumber={num => this.setState({ thousands: num })} />
            <ZeroOneTwoActionBtn
              title="百位"
              thisNum={hundreds}
              setNumber={num => this.setState({ hundreds: num })} />
            <ZeroOneTwoActionBtn
              title="十位"
              thisNum={tens}
              setNumber={num => this.setState({ tens: num })} />
            <ZeroOneTwoActionBtn
              title="个位"
              thisNum={ones}
              setNumber={num => this.setState({ ones: num })} />
            <button
              type="button"
              key="add"
              onClick={() => this.addForm()}
              style={[styles.button, styles.marginLet]}>
              添加
            </button>
            <button
              type="button"
              key="clear"
              style={styles.button}
              onClick={() => this.setState({
                tenThousands: null,
                thousands: null,
                hundreds: null,
                tens: null,
                ones: null,
              })}>
              清除
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    zeroOneTwo: selector(state, 'zeroOneTwo'),
  }),
  dispatch => bindActionCreators({
    changeField: value => change(MAIN_FORM, 'zeroOneTwo', value),
  }, dispatch),
);

export default reduxHook(radium(ZeroOneTwoSection));

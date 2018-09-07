// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 4px',
  },
  actionTitleWrapper: {
    alignSelf: 'stretch',
    backgroundColor: '#f9d854',
    border: '1px solid #4a4a4a',
    margin: '0 0 2px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionTitle: {
    color: '#4a4a4a',
    fontSize: 13,
  },
  buttonsWrapper: {
    width: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionBtn: {
    border: '1px solid #4a4a4a',
    padding: '6px 8px',
    color: '#4a4a4a',
    fontSize: 13,
    ':hover': {
      opacity: 0.8,
    },
    ':active': {
      boxShadow: '0 1px #666',
      transform: 'translateY(1px)',
    },
  },
  activedBtn: {
    backgroundColor: '#f9d854',
  },
};

type Props = {
  title: string,
  setNumber: Function,
  thisNum: string,
}

class ZeroOneTwoActionBtn extends PureComponent<Props> {
  render() {
    const {
      title,
      setNumber,
      thisNum,
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <div style={styles.actionTitleWrapper}>
          <span style={styles.actionTitle}>{title}</span>
        </div>
        <div style={styles.buttonsWrapper}>
          <button
            type="button"
            key={`${title}Zero`}
            onClick={() => setNumber('0')}
            style={[
              styles.actionBtn,
              thisNum === '0' && styles.activedBtn,
            ]}>
            0
          </button>
          <button
            type="button"
            key={`${title}One`}
            onClick={() => setNumber('1')}
            style={[
              styles.actionBtn,
              thisNum === '1' && styles.activedBtn,
            ]}>
            1
          </button>
          <button
            type="button"
            key={`${title}Two`}
            onClick={() => setNumber('2')}
            style={[
              styles.actionBtn,
              thisNum === '2' && styles.activedBtn,
            ]}>
            2
          </button>
        </div>
      </div>
    );
  }
}

export default radium(ZeroOneTwoActionBtn);

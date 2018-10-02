// @flow

import React, { PureComponent } from 'react';
import { FieldArray } from 'redux-form';
import radium from 'radium';
import BileSetFieldArray from './Form/BileSetFieldArray';
import BileSetNumberSection from './Elements/BileSetNumberSection';

const styles = {
  wrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '10px 8px 6px 8px',
    margin: '4px 8px 0 8px',
    border: '1px solid #4a4a4a',
  },
  titleWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 0 12px 0',
  },
  failWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0 0 0 20px',
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
  },
  failTitle: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
    margin: '0 4px 0 0',
  },
  button: {
    width: 25,
    margin: '0 1px',
  },
  lineWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '3px 0',
  },
};

type Props = {

}

class BileSetSection extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleWrapper}>
          <span style={styles.title}>【胆码组】</span>
        </div>
        <div style={styles.lineWrapper}>
          <FieldArray
            name="bileSet1"
            component={BileSetFieldArray} />
          <BileSetNumberSection name="bileSet1" />
        </div>
        <div style={styles.lineWrapper}>
          <FieldArray
            name="bileSet2"
            component={BileSetFieldArray} />
          <BileSetNumberSection name="bileSet2" />
        </div>
        <div style={styles.lineWrapper}>
          <FieldArray
            name="bileSet3"
            component={BileSetFieldArray} />
          <BileSetNumberSection name="bileSet3" />
        </div>
      </div>
    );
  }
}

export default radium(BileSetSection);

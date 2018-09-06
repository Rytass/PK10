// @flow

import React, { PureComponent } from 'react';
import {
  FieldArray,
  Field,
} from 'redux-form';
import radium from 'radium';
import NumberTextInput from './Form/NumberTextInput';
import BileSetFieldArray from './Form/BileSetFieldArray';
import BileSetNumberSection from './Elements/BileSetNumberSection';

const styles = {
  wrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '10px 8px 8px 8px',
    margin: '4px 8px',
    border: '1px solid #4a4a4a',
  },
  titleWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 0 8px 0',
  },
  failWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0 24px 0 0',
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
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
          <div style={styles.failWrapper}>
            <span style={styles.title}>容错级别</span>
            <Field
              name="bileFailFrom"
              component={NumberTextInput} />
            <span style={styles.title}>至</span>
            <Field
              name="bileFailTo"
              component={NumberTextInput} />
          </div>
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
        <div style={styles.lineWrapper}>
          <FieldArray
            name="bileSet4"
            component={BileSetFieldArray} />
          <BileSetNumberSection name="bileSet4" />
        </div>
      </div>
    );
  }
}

export default radium(BileSetSection);

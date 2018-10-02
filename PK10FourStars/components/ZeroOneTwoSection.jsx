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
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    border: '1px solid #4a4a4a',
    margin: '4px 4px 0 4px',
  },
  title: {
    fontSize: 12,
    color: '#4a4a4a',
  },
  lineWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2px 0',
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
};

type Props = {
  changeField: Function,
}

class ZeroOneTwoSection extends PureComponent<Props> {
  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('ZZZO', true);
    changeField('ZZZT', true);
    changeField('ZZOZ', true);
    changeField('ZZOO', true);
    changeField('ZZOT', true);
    changeField('ZZTZ', true);
    changeField('ZZTO', true);
    changeField('ZZTT', true);
    changeField('ZOZZ', true);
    changeField('ZOZO', true);
    changeField('ZOZT', true);
    changeField('ZOOZ', true);
    changeField('ZOOO', true);
    changeField('ZOOT', true);
    changeField('ZOTZ', true);
    changeField('ZOTO', true);
    changeField('ZOTT', true);
    changeField('ZTZZ', true);
    changeField('ZTZO', true);
    changeField('ZTZT', true);
    changeField('ZTOZ', true);
    changeField('ZTOO', true);
    changeField('ZTOT', true);
    changeField('ZTTZ', true);
    changeField('ZTTO', true);
    changeField('ZTTT', true);
    changeField('OZZZ', true);
    changeField('OZZO', true);
    changeField('OZZT', true);
    changeField('OZOZ', true);
    changeField('OZOO', true);
    changeField('OZOT', true);
    changeField('OZTZ', true);
    changeField('OZTO', true);
    changeField('OZTT', true);
    changeField('OOZZ', true);
    changeField('OOZO', true);
    changeField('OOZT', true);
    changeField('OOOZ', true);
    changeField('OOOO', true);
    changeField('OOOT', true);
    changeField('OOTZ', true);
    changeField('OOTO', true);
    changeField('OOTT', true);
    changeField('OTZZ', true);
    changeField('OTZO', true);
    changeField('OTZT', true);
    changeField('OTOZ', true);
    changeField('OTOO', true);
    changeField('OTOT', true);
    changeField('OTTZ', true);
    changeField('OTTO', true);
    changeField('OTTT', true);
    changeField('TZZZ', true);
    changeField('TZZO', true);
    changeField('TZZT', true);
    changeField('TZOZ', true);
    changeField('TZOO', true);
    changeField('TZOT', true);
    changeField('TZTZ', true);
    changeField('TZTO', true);
    changeField('TZTT', true);
    changeField('TOZZ', true);
    changeField('TOZO', true);
    changeField('TOZT', true);
    changeField('TOOZ', true);
    changeField('TOOO', true);
    changeField('TOOT', true);
    changeField('TOTZ', true);
    changeField('TOTO', true);
    changeField('TOTT', true);
    changeField('TTZZ', true);
    changeField('TTZO', true);
    changeField('TTZT', true);
    changeField('TTOZ', true);
    changeField('TTOO', true);
    changeField('TTOT', true);
    changeField('TTTZ', true);
    changeField('TTTO', true);
  }

  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('ZZZO', false);
    changeField('ZZZT', false);
    changeField('ZZOZ', false);
    changeField('ZZOO', false);
    changeField('ZZOT', false);
    changeField('ZZTZ', false);
    changeField('ZZTO', false);
    changeField('ZZTT', false);
    changeField('ZOZZ', false);
    changeField('ZOZO', false);
    changeField('ZOZT', false);
    changeField('ZOOZ', false);
    changeField('ZOOO', false);
    changeField('ZOOT', false);
    changeField('ZOTZ', false);
    changeField('ZOTO', false);
    changeField('ZOTT', false);
    changeField('ZTZZ', false);
    changeField('ZTZO', false);
    changeField('ZTZT', false);
    changeField('ZTOZ', false);
    changeField('ZTOO', false);
    changeField('ZTOT', false);
    changeField('ZTTZ', false);
    changeField('ZTTO', false);
    changeField('ZTTT', false);
    changeField('OZZZ', false);
    changeField('OZZO', false);
    changeField('OZZT', false);
    changeField('OZOZ', false);
    changeField('OZOO', false);
    changeField('OZOT', false);
    changeField('OZTZ', false);
    changeField('OZTO', false);
    changeField('OZTT', false);
    changeField('OOZZ', false);
    changeField('OOZO', false);
    changeField('OOZT', false);
    changeField('OOOZ', false);
    changeField('OOOO', false);
    changeField('OOOT', false);
    changeField('OOTZ', false);
    changeField('OOTO', false);
    changeField('OOTT', false);
    changeField('OTZZ', false);
    changeField('OTZO', false);
    changeField('OTZT', false);
    changeField('OTOZ', false);
    changeField('OTOO', false);
    changeField('OTOT', false);
    changeField('OTTZ', false);
    changeField('OTTO', false);
    changeField('OTTT', false);
    changeField('TZZZ', false);
    changeField('TZZO', false);
    changeField('TZZT', false);
    changeField('TZOZ', false);
    changeField('TZOO', false);
    changeField('TZOT', false);
    changeField('TZTZ', false);
    changeField('TZTO', false);
    changeField('TZTT', false);
    changeField('TOZZ', false);
    changeField('TOZO', false);
    changeField('TOZT', false);
    changeField('TOOZ', false);
    changeField('TOOO', false);
    changeField('TOOT', false);
    changeField('TOTZ', false);
    changeField('TOTO', false);
    changeField('TOTT', false);
    changeField('TTZZ', false);
    changeField('TTZO', false);
    changeField('TTZT', false);
    changeField('TTOZ', false);
    changeField('TTOO', false);
    changeField('TTOT', false);
    changeField('TTTZ', false);
    changeField('TTTO', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【杀012路】</span>
          <div>
            <button
              type="button"
              key="all"
              onClick={() => this.allValue()}
              style={styles.allBtn}>
              全
            </button>
            <button
              type="button"
              key="clear"
              onClick={() => this.clearValue()}
              style={styles.clearBtn}>
              清
            </button>
          </div>
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="ZZZZ"
            label="0000"
            disabled
            component={CheckBox} />
          <Field
            name="ZZZO"
            label="0001"
            component={CheckBox} />
          <Field
            name="ZZZT"
            label="0002"
            component={CheckBox} />
          <Field
            name="ZZOZ"
            label="0010"
            component={CheckBox} />
          <Field
            name="ZZOO"
            label="0011"
            component={CheckBox} />
          <Field
            name="ZZOT"
            label="0012"
            component={CheckBox} />
          <Field
            name="ZZTZ"
            label="0020"
            component={CheckBox} />
          <Field
            name="ZZTO"
            label="0021"
            component={CheckBox} />
          <Field
            name="ZZTT"
            label="0022"
            component={CheckBox} />
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="ZOZZ"
            label="0100"
            component={CheckBox} />
          <Field
            name="ZOZO"
            label="0101"
            component={CheckBox} />
          <Field
            name="ZOZT"
            label="0102"
            component={CheckBox} />
          <Field
            name="ZOOZ"
            label="0110"
            component={CheckBox} />
          <Field
            name="ZOOO"
            label="0111"
            component={CheckBox} />
          <Field
            name="ZOOT"
            label="0112"
            component={CheckBox} />
          <Field
            name="ZOTZ"
            label="0120"
            component={CheckBox} />
          <Field
            name="ZOTO"
            label="0121"
            component={CheckBox} />
          <Field
            name="ZOTT"
            label="0122"
            component={CheckBox} />
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="ZTZZ"
            label="0200"
            component={CheckBox} />
          <Field
            name="ZTZO"
            label="0201"
            component={CheckBox} />
          <Field
            name="ZTZT"
            label="0202"
            component={CheckBox} />
          <Field
            name="ZTOZ"
            label="0210"
            component={CheckBox} />
          <Field
            name="ZTOO"
            label="0211"
            component={CheckBox} />
          <Field
            name="ZTOT"
            label="0212"
            component={CheckBox} />
          <Field
            name="ZTTZ"
            label="0220"
            component={CheckBox} />
          <Field
            name="ZTTO"
            label="0221"
            component={CheckBox} />
          <Field
            name="ZTTT"
            label="0222"
            component={CheckBox} />
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="OZZZ"
            label="1000"
            component={CheckBox} />
          <Field
            name="OZZO"
            label="1001"
            component={CheckBox} />
          <Field
            name="OZZT"
            label="1002"
            component={CheckBox} />
          <Field
            name="OZOZ"
            label="1010"
            component={CheckBox} />
          <Field
            name="OZOO"
            label="1011"
            component={CheckBox} />
          <Field
            name="OZOT"
            label="1012"
            component={CheckBox} />
          <Field
            name="OZTZ"
            label="1020"
            component={CheckBox} />
          <Field
            name="OZTO"
            label="1021"
            component={CheckBox} />
          <Field
            name="OZTT"
            label="1022"
            component={CheckBox} />
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="OOZZ"
            label="1100"
            component={CheckBox} />
          <Field
            name="OOZO"
            label="1101"
            component={CheckBox} />
          <Field
            name="OOZT"
            label="1102"
            component={CheckBox} />
          <Field
            name="OOOZ"
            label="1110"
            component={CheckBox} />
          <Field
            name="OOOO"
            label="1111"
            component={CheckBox} />
          <Field
            name="OOOT"
            label="1112"
            component={CheckBox} />
          <Field
            name="OOTZ"
            label="1120"
            component={CheckBox} />
          <Field
            name="OOTO"
            label="1121"
            component={CheckBox} />
          <Field
            name="OOTT"
            label="1122"
            component={CheckBox} />
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="OTZZ"
            label="1200"
            component={CheckBox} />
          <Field
            name="OTZO"
            label="1201"
            component={CheckBox} />
          <Field
            name="OTZT"
            label="1202"
            component={CheckBox} />
          <Field
            name="OTOZ"
            label="1210"
            component={CheckBox} />
          <Field
            name="OTOO"
            label="1211"
            component={CheckBox} />
          <Field
            name="OTOT"
            label="1212"
            component={CheckBox} />
          <Field
            name="OTTZ"
            label="1220"
            component={CheckBox} />
          <Field
            name="OTTO"
            label="1221"
            component={CheckBox} />
          <Field
            name="OTTT"
            label="1222"
            component={CheckBox} />
        </div>

        <div style={styles.lineWrapper}>
          <Field
            name="TZZZ"
            label="2000"
            component={CheckBox} />
          <Field
            name="TZZO"
            label="2001"
            component={CheckBox} />
          <Field
            name="TZZT"
            label="2002"
            component={CheckBox} />
          <Field
            name="TZOZ"
            label="2010"
            component={CheckBox} />
          <Field
            name="TZOO"
            label="2011"
            component={CheckBox} />
          <Field
            name="TZOT"
            label="2012"
            component={CheckBox} />
          <Field
            name="TZTZ"
            label="2020"
            component={CheckBox} />
          <Field
            name="TZTO"
            label="2021"
            component={CheckBox} />
          <Field
            name="TZTT"
            label="2022"
            component={CheckBox} />
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="TOZZ"
            label="2100"
            component={CheckBox} />
          <Field
            name="TOZO"
            label="2101"
            component={CheckBox} />
          <Field
            name="TOZT"
            label="2102"
            component={CheckBox} />
          <Field
            name="TOOZ"
            label="2110"
            component={CheckBox} />
          <Field
            name="TOOO"
            label="2111"
            component={CheckBox} />
          <Field
            name="TOOT"
            label="2112"
            component={CheckBox} />
          <Field
            name="TOTZ"
            label="2120"
            component={CheckBox} />
          <Field
            name="TOTO"
            label="2121"
            component={CheckBox} />
          <Field
            name="TOTT"
            label="2122"
            component={CheckBox} />
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="TTZZ"
            label="2200"
            component={CheckBox} />
          <Field
            name="TTZO"
            label="2201"
            component={CheckBox} />
          <Field
            name="TTZT"
            label="2202"
            component={CheckBox} />
          <Field
            name="TTOZ"
            label="2210"
            component={CheckBox} />
          <Field
            name="TTOO"
            label="2211"
            component={CheckBox} />
          <Field
            name="TTOT"
            label="2212"
            component={CheckBox} />
          <Field
            name="TTTZ"
            label="2220"
            component={CheckBox} />
          <Field
            name="TTTO"
            label="2221"
            component={CheckBox} />
          <Field
            name="TTTT"
            label="2222"
            disabled
            component={CheckBox} />
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

export default reduxHook(radium(ZeroOneTwoSection));

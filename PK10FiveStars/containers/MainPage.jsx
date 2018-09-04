// @flow

import React, { PureComponent } from 'react';
import {
  change,
  reduxForm,
} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import initNumberPool from '../helper/init';
import ResultSection from '../components/ResultSection';
import BigSmallSection from '../components/BigSmallSection';
import OddEvenSection from '../components/OddEvenSection';
import PrimeCompositeSection from '../components/PrimeCompositeSection';
import { INIT_FORM_VALUE } from '../shared/initValue';
import { MAIN_FORM } from '../shared/form';
import { NO_RESULT } from '../shared/message';

const styles = {
  wrapper: {
    padding: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
  },
};

type Props = {
  handleSubmit: Function,
  changeResultNumber: Function,
}

class MainPage extends PureComponent<Props> {
  static ACTIONS = [

  ];

  state = {
    runningOptions: null,
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      runningOptions,
    } = this.state;

    if (!prevState.runningOptions && runningOptions) {
      const {
        changeResultNumber,
      } = this.props;

      setTimeout(() => {
        const result = initNumberPool();

        if (!result.length) {
          changeResultNumber([NO_RESULT]);
        } else {
          changeResultNumber(result);
        }

        this.setState({ runningOptions: null });
      }, 0);
    }
  }

  submit(options) {
    this.setState({ runningOptions: options });
  }

  render() {
    const {
      handleSubmit,
    } = this.props;

    const {
      runningOptions,
    } = this.state;

    return (
      <form style={styles.wrapper} onSubmit={handleSubmit(d => this.submit(d))}>
        <BigSmallSection />
        <OddEvenSection />
        <PrimeCompositeSection />
        <ResultSection isRunning={!!runningOptions} />
      </form>
    );
  }
}

const formHook = reduxForm({
  form: MAIN_FORM,
  destroyOnUnmount: false,
  initialValues: INIT_FORM_VALUE,
});

const reduxHook = connect(
  () => ({

  }),
  dispatch => bindActionCreators({
    changeResultNumber: value => change(MAIN_FORM, 'resultNumber', value),
  }, dispatch),
);

export default reduxHook(formHook(MainPage));

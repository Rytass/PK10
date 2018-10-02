// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '2px 0',
  },
  label: {
    fontSize: 11,
    color: '#4a4a4a',
    margin: '0 0 0 1px',
  },
  disabledText: {
    color: '#9b9b9b',
  },
};

type Props = {
  label: string,
  input: {
    name: string,
    onChange: Function,
    value: boolean,
  },
  meta: {
    form: string,
  },
  disabled: boolean,
}

class CheckBox extends PureComponent {
  props: Props

  render() {
    const {
      label,
      input: {
        name,
        onChange,
        value,
      },
      meta: {
        form,
      },
      disabled,
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <input
          id={`${form}:${name}`}
          checked={value}
          onChange={onChange}
          disabled={disabled}
          type="checkbox" />
        <label
          htmlFor={`${form}:${name}`}
          style={[styles.label, disabled && styles.disabledText]}>
          {label}
        </label>
      </div>
    );
  }
}

export default radium(CheckBox);

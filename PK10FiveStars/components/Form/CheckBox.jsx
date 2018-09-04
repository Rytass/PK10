// @flow

import React, { PureComponent } from 'react';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 12,
    letterSpacing: 1,
    color: '#4a4a4a',
    margin: '0 0 0 3px',
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
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <input
          id={`${form}:${name}`}
          checked={value}
          onChange={onChange}
          type="checkbox" />
        <span style={styles.label}>
          {label}
        </span>
      </div>
    );
  }
}

export default CheckBox;

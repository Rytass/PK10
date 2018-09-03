// @flow

import React from 'react';
import { NO_RESULT } from '../shared/message';

const styles = {
  line: {
    width: '100%',
    height: 18,
    lineHeight: 1.5,
    fontSize: 12,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 12px',
  },
  value: {
    fontSize: 14,
    color: '#4a4a4a',
  },
};

function ResultList({
  virtual,
}: {
  virtual: {
    height: number,
  },
}) {
  return (
    <div style={virtual.style}>
      {virtual.items.map(arrValue => (
        <p key={arrValue[0]} style={styles.line}>
          {arrValue.map((value) => {
            if (value === NO_RESULT) {
              return (
                <span key={value.num} style={styles.value}>{value}</span>
              );
            }

            const number = value.num;
            const splitNum = number.split('').map((num) => {
              if (num === '0') return '10';

              return `0${num}`;
            });
            const resultNum = splitNum.join('\xa0\xa0');

            return (
              <span key={value.num} style={styles.value}>{resultNum}</span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

export default ResultList;

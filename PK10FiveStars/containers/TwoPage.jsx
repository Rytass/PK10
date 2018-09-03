// @flow

import React from 'react';

const styles = {
  wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
};

function TwoPage() {
  return (
    <div style={styles.wrapper}>
      <h2>Two!!!</h2>
    </div>
  );
}

export default TwoPage;

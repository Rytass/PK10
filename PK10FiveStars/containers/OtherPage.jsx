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

function OtherPage() {
  return (
    <div style={styles.wrapper}>
      <h2>Other!!!</h2>
    </div>
  );
}

export default OtherPage;

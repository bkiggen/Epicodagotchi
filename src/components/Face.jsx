import React from 'react';
import HappyFace from './HappyFace';
import SadFace from './SadFace';

function Face({ happy }) {
  let currentlyVisibleFace = null;
  if (happy) {
    currentlyVisibleFace = <HappyFace/>
  } else {
    currentlyVisibleFace = <SadFace/>
  }
  return (
    <div>
      {currentlyVisibleFace}
    </div>
  );
}

export default Face;

// <SadFace/>

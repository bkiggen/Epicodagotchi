import React from 'react';
import PropTypes from 'prop-types';

function Welcome(props){
  return (
    <div>
      <p onClick={props.onNameEntry}>Welcome</p>
    </div>
  );
}

export default Welcome;

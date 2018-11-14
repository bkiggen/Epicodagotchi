import React from 'react';
import PropTypes from 'prop-types';

function Status({ statusName, statusLevel, onLevelClick }) {
  return (
    <div>
      <p onClick={onLevelClick}>{statusName}</p>
      {statusLevel}
    </div>
  );
}

export default Status;

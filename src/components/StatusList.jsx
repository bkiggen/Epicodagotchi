import React from 'react';
import PropTypes from 'prop-types';
import Status from './Status';

function StatusList({coffeeLevel, sleepLevel, workLevel, onCoffeeLevelChange, onWorkLevelChange, onSleepLevelChange }) {
  return (
    <div>
      <Status
        statusLevel={coffeeLevel}
        statusName='Coffee Level'
        onLevelClick={onCoffeeLevelChange}
      />
      <Status
        statusLevel={sleepLevel}
        statusName='Sleep Level'
        onLevelClick={onSleepLevelChange}
      />
      <Status
        statusLevel={workLevel}
        statusName='Work Level'
        onLevelClick={onWorkLevelChange}
      />
    </div>
  );
}

export default StatusList;

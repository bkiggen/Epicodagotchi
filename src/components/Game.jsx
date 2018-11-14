import React from 'react';
import Face from './Face';
import StatusList from './StatusList';

function Game({ name, coffeeLevel, sleepLevel, workLevel, onCoffeeLevelChange, onWorkLevelChange, onSleepLevelChange}){

  return (
    <div>
      <p>{name}</p>
      <Face/>
      <StatusList
        coffeeLevel={coffeeLevel}
        sleepLevel={sleepLevel}
        workLevel={workLevel}
        onCoffeeLevelChange={onCoffeeLevelChange}
        onWorkLevelChange={onWorkLevelChange}
        onSleepLevelChange={onSleepLevelChange}
      />
    </div>
  );
}

export default Game;

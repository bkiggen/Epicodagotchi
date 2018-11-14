import React from 'react';
import Face from './Face';
import StatusList from './StatusList';

function Game({ name, masterLevelList, onLevelChange }){

  return (
    <div>
      <p>{name}</p>
      <Face/>
      <StatusList
        masterLevelList={masterLevelList}
        onLevelChange={onLevelChange}
      />
    </div>
  );
}

export default Game;

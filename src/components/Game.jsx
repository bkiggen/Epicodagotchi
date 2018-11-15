import React from 'react';
import Face from './Face';
import StatusList from './StatusList';

function Game({ name, masterLevelList, onLevelChange, happy }){

  return (
    <div>
      <h2>{name}</h2>
      <Face
        happy={happy}
         />
      <StatusList
        masterLevelList={masterLevelList}
        onLevelChange={onLevelChange}
      />
    </div>
  );
}

export default Game;

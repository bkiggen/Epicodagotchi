import React from 'react';


function Status({ statusLevel, name, onLevelChange, id }) {
  return (
    <div>
      <p onClick={() => onLevelChange(id)}>{name}</p>
      {statusLevel}
    </div>
  );
}

export default Status;

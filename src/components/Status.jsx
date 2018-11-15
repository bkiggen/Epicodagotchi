import React from 'react';


function Status({ statusLevel, name, onLevelChange, id }) {
  const statusStyles = {
    height: '400px',
    display: 'flex',
    flexDirection: 'column-reverse'
  }
  const barHeightStyles = {
    width: '150px',
    height: `${statusLevel}%`,
    backgroundColor: 'red'
  }
  statusLevel = statusLevel.toFixed();
  return (
    <div style={statusStyles}>
      <p>{name}</p>
      {statusLevel}
      <div style={barHeightStyles} onClick={() => onLevelChange(id)}>
      </div>
    </div>
  );
}

export default Status;

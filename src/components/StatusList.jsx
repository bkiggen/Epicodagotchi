import React from 'react';
import Status from './Status';

function StatusList({ masterLevelList, onLevelChange }) {
  const statusListStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: '50px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  return (
    <div style={statusListStyles}>

      {masterLevelList.map((type, index) =>
        <Status
          statusLevel={type.level}
          name={type.name}
          onLevelChange={onLevelChange}
          id={index}
          key={index}
        />
      )}
    </div>
  );
}

export default StatusList;

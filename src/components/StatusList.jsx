import React from 'react';
import Status from './Status';

function StatusList({ masterLevelList, onLevelChange }) {

  return (
    <div>

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

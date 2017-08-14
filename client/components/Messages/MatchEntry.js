import React from 'react';

const MatchEntry = ( { firstname, i, handleMatchClick, name }) => {
  return (
    <div onClick={() => {handleMatchClick(i)}}>
      {name}: {firstname}
    </div>
  );
};

export default MatchEntry;
import React from 'react';

const MatchEntry = ( { firstname, i, handleMatchClick, name }) => {
  return (
    <div onClick={() => {handleMatchClick(i)}}>
      {firstname}
    </div>
  );
};

export default MatchEntry;
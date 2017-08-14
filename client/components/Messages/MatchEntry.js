import React from 'react';

const MatchEntry = ( { firstname, i, handleMatchClick, name }) => {
  return (
    <div className="matchentry" onClick={() => {handleMatchClick(i)}} style={{cursor:'pointer'}}>
      {firstname}
    </div>
  );
};

export default MatchEntry;
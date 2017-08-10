import React from 'react';
import MatchEntry from './MatchEntry';

const MatchList = ({ firstnames, handleMatchClick }) => {
  return (
    <div>
      <h1>Messages</h1>
        {firstnames.map((firstname, i) => {
          return <MatchEntry firstname={firstname} i={i} handleMatchClick={handleMatchClick}/>
        })}
    </div>
  );
};

export default MatchList;
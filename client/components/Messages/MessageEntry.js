import React from 'react';

const MessageEntry = ({ message, firstname }) => {
  console.log('this is the messagentry', message)
  return (
    <div>
      {firstname}: {message}
    </div>
  );
};

export default MessageEntry;
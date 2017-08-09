import React from 'react';

const MessageEntry = ({ message }) => {
  console.log('this is the messagentry', message)
  return (
    <div>
      {message}
    </div>
  );
};

export default MessageEntry;
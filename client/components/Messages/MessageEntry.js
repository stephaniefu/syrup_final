import React from 'react';

const MessageEntry = ({ message, firstname }) => {
  console.log('this is the messagentry', message)
  return (
    <div>
       {/* You: {message}  */}
       You: {message} 
    </div>
  );
};

export default MessageEntry;
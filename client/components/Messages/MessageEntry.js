import React from 'react';
const MessageEntry = ({ message, firstname, myname }) => {
  console.log('this is the messagentry', message)
  return (
    <div>
       {/* You: {message}  */}
       {myname}: {message} 
    </div>
  );
};
export default MessageEntry;
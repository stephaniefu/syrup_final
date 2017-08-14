import React from 'react';
const MessageEntry = ({ message, firstname, myname }) => {
  console.log('this is the messagentry', message)
  return (
    <div className="messageDiv">
      <div className="from-them">
        {message} 
      </div>
      <div className="clear"></div>
    </div>
  );
};
export default MessageEntry;
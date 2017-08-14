import React from 'react';
import MessageEntry from './MessageEntry';

const MessageBox = ({ messages, firstname , handleMatchClick, myname}) => {
  return (
    <div>
      <h3 className="msg-title">Messages</h3>
      {messages.map(message => {
        return <MessageEntry firstname={firstname} message={message} handleMatchClick={handleMatchClick} myname={myname}/>
      })}
    </div>
  );
};
export default MessageBox;
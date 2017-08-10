import React from 'react';
import MessageEntry from './MessageEntry';

const MessageBox = ({ messages, firstname }) => {
  return (
    <div>
      {messages.map(message => {
        return <MessageEntry firstname={firstname} message={message}/>
      })}
    </div>
  );
};

export default MessageBox;
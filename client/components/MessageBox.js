import React from 'react';
import MessageEntry from './MessageEntry';

const MessageBox = ({ messages }) => {
  return (
    <div>
      {messages.map(message => {
        <MessageEntry message={message}/>
      })}
    </div>
  );
};

export default MessageBox;
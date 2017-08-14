import React from 'react';
import MessageEntry from './MessageEntry';

const MessageBox = ({ messages, firstname , handleMatchClick, myname}) => {
  return (
    <div>
      <h3 className="msg-title">Conversation with {firstname}</h3>
      <section className="messageSection">
        {messages.map(message => {
          return <MessageEntry firstname={firstname} message={message} handleMatchClick={handleMatchClick} myname={myname}/>
        })} 
      </section>
    </div>
  );
};
export default MessageBox;
import React from 'react';
import MessageBox from './MessageBox';
import SocketIOClient from 'socket.io-client';


const socket = io.connect();

const divStyle = {
  height: 200,
};

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages:[],
      text: ''
    }
    // this.socket = SocketIOClient('http://localhost:8080');
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSend = this.handleOnSend.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSend(e){
    e.preventDefault();
    socket.emit('send message', this.state.text)
    // this.setState({
    //   message: ''
    // })
    socket.on('chat message', data => {
      console.log('the data i get back',data)
      this.setState({
        messages: this.state.messages.push(data)
      })
      })
  }

  render() {
    return (
      <div className="intro-message">
        <h1>This is the messages page!</h1>
        <MessageBox messages={this.state.messages}/>
         <form>
           <input name="message" value={this.state.message} onChange={this.handleOnChange}/>
           <button onClick={this.handleOnSend}>Send</button>
        </form>
      </div>
    );
  }
}
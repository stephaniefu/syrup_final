import React from 'react';
import MessageBox from './MessageBox';
import NavBar from './NavBar';
import SocketIsockOClient from 'socket.io-client';
import axios from 'axios';


// const socket = io.connect();

const divStyle = {
  height: 500,
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

  componentDidMount(){
    this.socket = io('/')
    this.socket.on('chat message', data => {
      console.log('the data i get back', data)
      // axios.post('http://localhost:8080/api/message/:userid/:recipientid', {
      //   text: data
      // })
        this.setState({
          text: '',
          messages: [...this.state.messages, data],
        })
      console.log(this.state.messages)
    })
    
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSend(e){
    e.preventDefault();
    this.socket.emit('send message', this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div className="intro-message">
        <NavBar />
        <h1>This is the messages page!</h1>
        <div style={divStyle} >
        <MessageBox messages={this.state.messages}/>
        </div>
         <form>
           <input name="message" value={this.state.text} onChange={this.handleOnChange}/>
           <button onClick={this.handleOnSend}>Send</button>
        </form>
      </div>
    );
  }
}
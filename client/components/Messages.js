import React from 'react';
import MessageBox from './MessageBox';
import NavBar from './NavBar';
import MatchList from './MatchList';
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
      messages: [],
      text: '',
      firstnames: ['john', 'jacob', 'jen', 'jordan'],
      firstname: ''
    }
    // this.socket = SocketIOClient('http://localhost:8080');
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSend = this.handleOnSend.bind(this);
    this.handleMatchClick = this.handleMatchClick.bind(this);
  }

  componentDidMount(){
    this.socket = io('/')
    this.socket.on('chat message', data => {
      console.log('the data i get back', data)
      // axios.get('http://localhost:8080/api/matches/:userId')
      // .then(data => {
      //   this.setState({
      //     firstname: data.data
      //   })
      // })


        this.setState({
          text: '',
          messages: [...this.state.messages, data],
        })
    })
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSend(e){
    console.log('asdlfkjas;kldfj', localStorage)
    e.preventDefault();
    this.socket.emit('send message', this.state.text)
    this.setState({
      text: ''
    })
    axios.post(`http://localhost:8080/api/message/${localStorage.idTokenPayload}/google-oauth2|110881503556851462946`, {
      text: this.state.text
    })
  }

  handleMatchClick(i){
    let name = this.state.firstnames[i]
    this.setState({
      firstname: name
    }, () => {
      console.log(this.state.firstname)
    } )
  }

  render() {
    console.log('this is your local storage', localStorage);
    return (
      <div className="intro-message">
        <NavBar />
        <MatchList className="matchlist" firstnames={this.state.firstnames} handleMatchClick={this.handleMatchClick}/>
        <h1>This is the messages page!</h1>
        <div style={divStyle} >
        <MessageBox className="messagebox" messages={this.state.messages} firstname={this.state.firstname}/>
        </div>
         <form>
           <input name="message" value={this.state.text} onChange={this.handleOnChange}/>
           <button onClick={this.handleOnSend}>Send</button>
        </form>
      </div>
    );
  }
}
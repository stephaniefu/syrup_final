import React from 'react';
import MessageBox from './MessageBox';
import NavBar from '../NavBar';
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
      firstnames: [],
      firstname: '',
      matcheeIds: [],
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSend = this.handleOnSend.bind(this);
    this.handleMatchClick = this.handleMatchClick.bind(this);
  }

  componentDidMount(){
    this.socket = io('/')
    this.socket.on('chat message', data => {
      this.setState({
          text: '',
          messages: [...this.state.messages, data],
        })
    })
      axios.get(`http://localhost:8080/api/matches/${localStorage.idTokenPayload}`)
      .then(({data}) => {
        for (let i = 0; i < data.length; i++) {
          this.setState({
            matcheeIds: [...this.state.matcheeIds, Number(data[i]['matcheeId'])]
          })
        }
      })
      .then(() => {
        for (let j = 0; j < this.state.matcheeIds.length; j++) {
          axios.get(`http://localhost:8080/api/profile/${this.state.matcheeIds[j]}`)
            .then(({data}) => {
              this.setState({
                firstnames: [...this.state.firstnames, data.firstname]
              })
            })
        }
      })
  }

  handleOnChange(e){
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
    axios.post(`http://localhost:8080/api/message/${localStorage.idTokenPayload}/${this.state.firstname}`, {
      text: this.state.text
    })
  }

  handleMatchClick(i){
    console.log('this is the key', i)
    let name = this.state.firstnames[i]
    this.setState({
      firstname: name
    }, () => {
      console.log('this is the first name', this.state.firstname)
    })
    axios.get(`http://localhost:8080/api/message/${localStorage.idTokenPayload}/${this.state.firstname}`)
    .then(({data}) => {
      console.log('this is the data', data)
      for (let i = 0; i < data.length; i++) {
      // this.setState({
      //   messages: [...this.state.messages, data[i].text]
      // })
    }})
  }

  render() {
    return (
      <div className="intro-message">
        <NavBar />
        <MatchList className="matchlist" firstnames={this.state.firstnames} handleMatchClick={this.handleMatchClick}/>
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
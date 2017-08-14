import React from 'react';
import NavBar from './NavBar';
import axios from 'axios';

export default class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: localStorage.idTokenPayload,
      matches: []
    }
  }

  componentDidMount(){
    console.log('THIS IS A userID in Matches: ', this.state.userId);
    axios.get(`/api/match/${this.state.userId}`)
      .then(data => {
        console.log('BEEFEATER', data);
      })
      .catch(err => {
        console.log(err);
      })
    console.log('These are the props in matches: ', this.props);
  }

  render() {
    return (
      <div className="intro-message">
        <NavBar />
        <h1>This is the matches page!</h1>
      </div>
    );
  }
}
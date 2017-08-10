import React from 'react';
import NavBar from './NavBar';

export default class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // userId: props.match.params.id
    }
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
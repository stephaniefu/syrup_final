import React from 'react';

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
        <h1>This is the matches page!</h1>
      </div>
    );
  }
}
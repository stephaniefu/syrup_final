import React from 'react';

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // userId: props.match.params.id
    }
  }

  render() {
    return (
      <div className="intro-message">
        <h1>This is the messages page!</h1>
      </div>
    );
  }
}
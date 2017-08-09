import React from 'react';

export default class ProfileHead extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  isMatched() {
    if (!matched) {
      return <p><button className="cardButton" onClick={this.sendMatch}>Match</button></p>
    }
    return <p><button className="cardButton">Matched!</button></p>
  }

  sendMatch() {
    this.props.handleSubmit();
  }

  render() {
    return (
      <div>
        <div className="profileCard">
          <img src={this.props.data.profilepic} width="300" height="200"/>
          <div className="profileContainer">
            <h2>{this.props.data.firstname}, {this.props.data.age}</h2>
            <p>{this.props.data.bio}</p>
            <p><button className="cardButton" onClick={this.handleClick}>Match</button></p>
          </div>
        </div>
      </div>
    );
  }
}


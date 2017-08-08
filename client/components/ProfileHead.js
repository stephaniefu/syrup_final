import React from 'react';

export default class ProfileHead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profileHead">
        <div className="profileImg">
          <img src={this.props.data.profilepic} width="200" height="200"/>
        </div>
        <div className="profileInfo">
          <h3>{this.props.data.firstname}, {this.props.data.age}</h3>
          <p>{this.props.data.bio}</p>
        </div>
      </div>
    );
  }
}
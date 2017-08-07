import React from 'react';

export default class ProfileHead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Profile Head Component</h3>
        <h3>props: {this.props.user}</h3>
      </div>
    );
  }
}
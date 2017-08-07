import React from 'react';

export default class ProfilePhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Profile Photos Component</h4>
        <h4>props: {this.props.user}</h4>
      </div>
    );
  }
}
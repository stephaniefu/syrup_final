import React from 'react';
// import NavBar from './NavBar';
import ProfileHead from './ProfileHead';
import ProfilePhotos from './ProfilePhotos';

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // userId: props.match.params.id
    }
  }

  render() {
    return (
      <div className="intro-message">
        <h1>This is a profile page!</h1>
        <ProfileHead />
        <ProfilePhotos />
      </div>
    );
  }
}
import React from 'react';
// import NavBar from './NavBar';
import ProfileHead from './ProfileHead';
import ProfilePhotos from './ProfilePhotos';

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.match.params.id
    }
  }

  render() {
    return (
      <div className="intro-message">
        <ProfileHead userId={this.state.userId}/>
        <ProfilePhotos userId={this.state.userId}/>
      </div>
    );
  }
}
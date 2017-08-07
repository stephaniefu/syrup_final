import React from 'react';
// import NavBar from './NavBar';
import ProfileHead from './ProfileHead';
import ProfilePhotos from './ProfilePhotos';
import axios from 'axios';

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.match.params.id
    }
  }

  componentDidMount() {
    axios.get(`/profile/${this.state.userId}`)
    .then(data => {
      console.log(data)
    })
    .catch(err => { if (err) { return console.error(err) } })
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
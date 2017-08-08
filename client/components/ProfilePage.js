import React from 'react';
// import NavBar from './NavBar';
import ProfileHead from './ProfileHead';
import ProfilePhotos from './ProfilePhotos';
import axios from 'axios';

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '1',
      userData: {
        "id": "1",
        "firstname": "Selena",
        "profilepic": "https://peopledotcom.files.wordpress.com/2017/02/selena-gomez-2000.jpg?w=2000&h=2000",
        "images": [
          "https://media.glamour.com/photos/58792917822a37aa336309bb/master/pass/SELENA%20GOMEZ.jpg?mbid=social_retweet",
          "https://media.glamour.com/photos/58792917822a37aa336309bb/master/pass/SELENA%20GOMEZ.jpg?mbid=social_retweet",
          "https://media.glamour.com/photos/58792917822a37aa336309bb/master/pass/SELENA%20GOMEZ.jpg?mbid=social_retweet"
        ],
        "bio": "super rich and famous",
        "gender": "female",
        "age": "24"
      }
    }
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8080/api/profile/${this.state.userId}`)
    .then(response => {
      // this.setState( userData = {
      //   firstname: response.data.firstname,
      //   profilepic: response.data.profilepic,
      //   images: response.data.images,
      //   bio: response.data.bio,
      //   gender: response.data.gender,
      //   age: response.data.age
      // })
    })
    .catch(err => { if (err) { return console.error(err) } })
  }

  render() {
    return (
      <div className="intro-message">
        <div className="profilePage">
          <ProfileHead data={this.state.userData}/>
          <ProfilePhotos images={this.state.userData.images}/>
        </div>
      </div>
    );
  }
}
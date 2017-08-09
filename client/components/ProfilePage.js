import React from 'react';
// import NavBar from './NavBar';
import ProfileHead from './ProfileHead';
import ProfilePhotos from './ProfilePhotos';
import axios from 'axios';

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      userData: {
        "id": "1",
        "firstname": "Harold",
        "profilepic": "http://cdn77.sadanduseless.com/wp-content/uploads/2014/09/hide-the-pain-harold.jpg",
        "images": [
          "https://pbs.twimg.com/profile_images/540223285221277696/Xlk9rNfl.jpeg",
          "https://pbs.twimg.com/profile_images/540223285221277696/Xlk9rNfl.jpeg",
          "https://pbs.twimg.com/profile_images/540223285221277696/Xlk9rNfl.jpeg",
          "https://pbs.twimg.com/profile_images/540223285221277696/Xlk9rNfl.jpeg"
        ],
        "bio": "super rich and famous",
        "gender": "male",
        "age": "65"
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    axios.post(`http://127.0.0.1:8080/api/match/${this.state.userId}`, {
      userId: this.state.userId
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(err => { if (err) {return console.error(err)} })
  }

  componentDidMount() {
    console.log('id is: ', this.state.userId);
    // axios.get(`http://127.0.0.1:8080/api/profile/${this.state.userId}`)
    // .then(response => {
    //   // this.setState( userData = {
    //   //   firstname: response.data.firstname,
    //   //   profilepic: response.data.profilepic,
    //   //   images: response.data.images,
    //   //   bio: response.data.bio,
    //   //   gender: response.data.gender,
    //   //   age: response.data.age
    //   // })
    // })
    // .catch(err => { if (err) { return console.error(err) } })
  }

  render() {
    return (
      <div className="intro-message">
        <div className="profilePage">
          <ProfileHead data={this.state.userData} handleSubmit={this.handleSubmit}/>
          <ProfilePhotos images={this.state.userData.images}/> 
        </div>
      </div>
    );
  }
}
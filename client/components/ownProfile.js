import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

class ownProfile extends Component {
  constructor(){
    super()
    this.state={
      firstname:'',
      profilepic:'',
      age:'',
      gender:'',
      bio:'',
      images:''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
  }

 handleOnChange(event){
    let temp = event.target.name;
    this.setState({
      [temp]: event.target.value
    })
  }

 handleOnUpdate(){
    axios.post('http://localhost:8080/api/profile', {
      firstname: this.state.firstname,
      profilepic:this.state.profilepic,
      age: this.state.age,
      gender: this.state.gender,
      bio: this.state.bio,
      images: this.state.images,
    })
    .then(() => {
      this.setState({
        firstname: '',
        profilepic: '',
        age: '',
        gender: '',
        bio: '',
        images: '',
      })
    })
  }

 render() {
    return (
      <div>
      <NavBar />
        <h1>Own Profile</h1> 
        <input name="firstname" value={this.state.firstname} onChange={this.handleOnChange} placeholder="First Name"/>
        <input name="profilepic" value={this.state.profilepic} onChange={this.handleOnChange} placeholder="Profile Pic"/>
        <input name="age" value={this.state.age} onChange={this.handleOnChange} placeholder="Age"/>
        <input name="gender" value={this.state.gender} onChange={this.handleOnChange} placeholder="Gender"/>
        <input name="bio" value={this.state.bio} onChange={this.handleOnChange} placeholder="Bio"/>
        <input name="images" value={this.state.images} onChange={this.handleOnChange} placeholder="Images"/>
        <button onClick={this.handleOnUpdate}>Update</button>
      </div>
    );
  }
}

// export default ownProfile;

// import React from 'react';
// import ProfileHead from './ProfileHead';
// import ProfilePhotos from './ProfilePhotos';
// import axios from 'axios';

// export default class OwnProfile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: 2, // will later dynamically know which user it is
//       firstname: '',
//       profilepic: '',
//       images: [],
//       bio: '',
//       gender: '',
//       age: 0,
//       own: true
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit() {
//     axios.post(`/api/match/${this.state.id}`)
//     .then(response => {
//       this.setState({
//         matched: true
//       })
//     })
//     .catch(err => { if (err) {return console.error(err)} })
//   }

//   componentDidMount() {
//     axios.get(`/api/profile/${this.state.id}`)
//     .then(profile => {
//       var images = this.state.images;
//       profile.data.images.forEach(image => {
//         images.push(image);
//       })

//       this.setState({
//         firstname: profile.data.firstname,
//         profilepic: profile.data.profilepic,
//         images: images,
//         bio: profile.data.bio,
//         gender: profile.data.gender,
//         age: profile.data.age,
//       })
//     })
//     .catch(err => { return console.error(err) });
//   }

//   render() {
//     return (
//       <div className="intro-message">
//         <ProfileHead data={this.state} handleSubmit={this.handleSubmit} />
//         <div className="photosContainer">
//           <ProfilePhotos images={this.state.images} />       
//         </div>
//       </div>
//     );
//   }
// }
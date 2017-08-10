import React from 'react';
import ProfileHead from './ProfileHead';
import ProfilePhotos from './ProfilePhotos';
import NavBar from './NavBar';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

 class ProfilePage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: this.props.match.params.id,
  //     firstname: '',
  //     profilepic: '',
  //     images: [],
  //     bio: '',
  //     gender: '',
  //     age: 0,
  //     matched: false
  //   }
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit() {
  //   axios.post(`/api/match/${this.state.id}`)
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(err => { if (err) {return console.error(err)} })
  // }

  // componentDidMount() {
  //   axios.all([
  //     axios.get(`/api/profile/${this.state.id}`),
  //     axios.get(`/api/match/${this.state.id}`)
  //   ])
  //   .then(axios.spread((profile, match) => {
  //     var images = this.state.images;
  //     profile.data.images.forEach(image => {
  //       images.push(image);
  //     })

  //     this.setState({
  //       firstname: profile.data.firstname,
  //       profilepic: profile.data.profilepic,
  //       images: images,
  //       bio: profile.data.bio,
  //       gender: profile.data.gender,
  //       age: profile.data.age,
  //       matched: match.data
  //     })
  //   }))
  //   .catch(err => { return console.error(err) });
  // }

  render() {
    return(<div>Hello?</div>);
    // return (
    //   <div className="intro-message">
    //     <NavBar />
    //     <ProfileHead data={this.state} handleSubmit={this.handleSubmit} />
    //     <div className="photosContainer">
    //       <ProfilePhotos images={this.state.images} />       
    //     </div>
    //   </div>
    // );
  }
}

export default ProfilePage;
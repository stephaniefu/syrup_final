import React, { Component } from 'react';

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
    let temp = this.state.name;
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
  }

 render() {
    return (
      <div>
        <h1>Own Profile</h1> 
        <input name="firstname" value={this.state.firstname} onChange={this.handleOnChange}/>
        <input name="profilepic" value={this.state.profilepic} onChange={this.handleOnChange}/>
        <input name="age" value={this.state.age} onChange={this.handleOnChange}/>
        <input name="gender" value={this.state.gender} onChange={this.handleOnChange}/>
        <input name="bio" value={this.state.bio} onChange={this.handleOnChange}/>
        <input name="images" value={this.state.images} onChange={this.handleOnChange}/>
        <button onClick={this.handleOnUpdate}>Update</button>
      </div>
    );
  }
}

export default ownProfile;
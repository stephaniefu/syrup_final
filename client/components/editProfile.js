import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'bjotvl61';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dmbpgz4gp/image/upload';

class editProfile extends Component {
  constructor(props){
    super(props);

    this.state={
      firstname: '',
      profilepic: '',
      images: [],
      bio: '',
      gender: '',
      age: '',
      uploadedProfile: null,
      uploadedProfileCloudinaryUrl: '',
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    }

    // bind functions
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.onProfileImageDrop = this.onProfileImageDrop.bind(this);
  }

  // thisSucks() {
  //   var myDropzone = new Dropzone("#my-awesome-dropzone");
  //   myDropzone.on("drop", (file) => {
  //     onProfileImageDrop(file)
  //   });
  // }

  onProfileImageDrop(files) {
    this.setState({
      uploadedProfile: files[0]
    });

    this.handleProfileImageUpload(files[0]);
  }

  handleProfileImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedProfileCloudinaryUrl: response.body.secure_url,
          profilepic: response.body.secure_url
        });
      }
    });
  }

  onImageDrop(files) {
    console.log('on image drop invoked!')
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        var images = this.state.images;
        images.push(response.body.secure_url);

        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
          images: images
        });
      }
    });
  }

  handleOnChange(event) {
    let temp = event.target.name;
    this.setState({
      [temp]: event.target.value
    })
  }

  handleOnUpdate() {
    console.log(this.state);
    axios.post('/api/profile', this.state)
    .then(() => {
      this.setState({
        firstname: '',
        profilepic: '',
        images: [],
        bio: '',
        gender: '',
        age: '',
        uploadedProfile: null,
        uploadedProfileCloudinaryUrl: '',
        uploadedFile: null,
        uploadedFileCloudinaryUrl: ''
      })
    })
  }

  render() {
    return (
      <div className="container bootstrap snippets edit-profile">
        <div className="row">
          <div className="col-xs-12 col-sm-9">
            <div className="form-horizontal">
              <div className="panel panel-default">
                <div className="panel-heading">
                <h4 className="panel-title">User info</h4>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label className="col-sm-2 control-label">First name</label>
                    <div className="col-sm-10">
                      <input name="firstname" onChange={this.handleOnChange} type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Gender</label>
                    <div className="col-sm-10">
                      <select name="gender" onChange={this.handleOnChange} className="form-control">
                        <option>Select gender</option> 
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Age</label>
                    <div className="col-sm-10">
                      <input name="age" onChange={this.handleOnChange} type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Bio</label>
                    <div className="col-sm-10">
                      <textarea name="bio" onChange={this.handleOnChange} rows="3" className="form-control"></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Profile picture</label>
                    <div className="col-sm-10">
                      <form>
                        <div className="FileUpload">
                          <Dropzone
                            onDrop={this.onProfileImageDrop.bind(this)}
                            multiple={false}
                            accept="image/*">
                            <div>Drop an image or click to select your profile picture.</div>
                          </Dropzone>
                        </div>

                        <div>
                          {this.state.uploadedProfileCloudinaryUrl === '' ? null :
                          <div>
                            <img src={this.state.uploadedProfileCloudinaryUrl} />
                          </div>}
                        </div>
                      </form> 
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Additional pictures</label>
                    <div className="col-sm-10">
                      <form>
                        <div className="FileUpload">
                          <Dropzone
                            onDrop={this.onImageDrop.bind(this)}
                            multiple={true}
                            accept="image/*">
                            <div>Add up to 6 additional images to your profile.</div>
                          </Dropzone>
                        </div>

                        <div>
                          {this.state.uploadedFileCloudinaryUrl === '' ? null :
                          <div>
                            <img src={this.state.uploadedFileCloudinaryUrl} />
                          </div>}
                        </div>
                      </form> 
                    </div>
                  </div>


                  <div className="form-group">
                    <label className="col-sm-2 control-label">Additional pictures</label>
                    <div className="col-sm-10">
                      <form action="/api/photos" className="dropzone" onChange={this.onImageDrop}
                        id="my-awesome-dropzone">
                      </form> 
                    </div>
                  </div>


                  <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-2">
                      <button onClick={this.handleOnUpdate} className="btn btn-primary">Submit</button>
                      <button type="reset" className="btn btn-default">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default editProfile;
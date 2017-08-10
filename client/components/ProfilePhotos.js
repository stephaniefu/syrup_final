import React from 'react';

export default class ProfilePhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {this.props.images.map((image, index) => {
          return <div className="col-sm-4 profilePhotos" key={index}><img src={image} width="200" height="200"/></div>
        })}  
      </div>          
    );
  }
}
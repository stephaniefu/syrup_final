import React from 'react';

export default class ProfilePhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photosContainer">
        <ul className="profilePhotos">
          {this.props.images.map((image, index) => {
            return <li className="profileli" key={index}><img src={image} width="300" height="300"/></li>
          })}  
        </ul>
      </div>
    );
  }
}
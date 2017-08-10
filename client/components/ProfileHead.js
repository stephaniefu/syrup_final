import React from 'react';

export default class ProfileHead extends React.Component {
  constructor(props) {
    super(props);
  }

  // render() {
  //   return (
  //     <div className="profileHead">
  //       <div className="profileImg">
  //         <img src={this.props.data.profilepic} width="200" height="200"/>
  //       </div>
  //       <div className="profileInfo">
  //         <h3>{this.props.data.firstname}, {this.props.data.age}</h3>
  //         <p>{this.props.data.bio}</p>
  //       </div>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div>
        <div className="profileCard">
          <img src={this.props.data.profilepic} width="300" height="200"/>
          <div className="profileContainer">
            <h2>John Doe</h2>
            <p className="profileTitle">CEO and Founder, Example</p>
            <p>Harvard University</p>
            {/* <a className="profileButton" href="#"><i className="fa fa-dribbble"></i></a> 
            <a className="profileButton" href="#"><i className="fa fa-twitter"></i></a> 
            <a className="profileButton" href="#"><i className="fa fa-linkedin"></i></a> 
            <a className="profileButton" href="#"><i className="fa fa-facebook"></i></a>  */}
            <p><button className="cardButton">Match</button></p>
          </div>
        </div>
      </div>
    );
  }
}


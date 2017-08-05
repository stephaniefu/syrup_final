import React from 'react';

export default class MatchesUploadSection extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="content-section-a">
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-5 col-sm-6">
		                    <hr className="section-heading-spacer"/>
		                    <div className="clearfix"></div>
		                    <h2 className="section-heading">Death to the Stock Photo:<br/>Special Thanks</h2>
		                    <p className="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
		                </div>
		                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
		                    <img className="img-responsive" src="img/ipad.png" alt=""/>
		                </div>
		            </div>
		        </div>
		    </div>
		);
	}
}
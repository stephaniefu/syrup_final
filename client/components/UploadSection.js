import React from 'react';

export default class UploadSection extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1>Syrup</h1>
                <h3>A New Way to Date Online</h3>
                <hr className="intro-divider"/>
              </div>
            </div>
            <form className="upload-form">
              <input type="text" className="input-lg" placeholder="Enter image url..." />
              <input className="button" id="upload-button" type="submit" value="Upload" />
            </form>
          </div>
        </div>
    	</div>
		);
	}
}
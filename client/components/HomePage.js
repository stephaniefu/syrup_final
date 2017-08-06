import React from 'react';

export default class HomePage extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
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
            		</div>
        		</div>
    		</div>
		);
	}
}
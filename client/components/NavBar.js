import React from 'react';

export default class NavBar extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        		<div className="container topnav">
            		<div className="navbar-header">
                		<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		                    <span className="sr-only">Toggle navigation</span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
                		</button>
                		<a className="navbar-brand topnav" href="#">Syrup</a>
            		</div>
            		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                		<ul className="nav navbar-nav navbar-right">
                    		<li>
                        		<a href="#about">Matches</a>
                    		</li>
                    		<li>
                        		<a href="#services">Messages</a>
                    		</li>
                    		<li>
                        		<a href="#contact">Profile</a>
                    		</li>
                		</ul>
            		</div>
        		</div>
    		</nav>
		);
	}
}
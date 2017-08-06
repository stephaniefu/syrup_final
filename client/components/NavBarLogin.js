import React from 'react';
import Auth from '../Auth/Auth';

const auth = new Auth();

export default class NavBarLogin extends React.Component {
	constructor(){
		super();

		this.login = this.login.bind(this);
	}

	login(){
		auth.login();
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
                        		<a href="#login" onClick={this.login}>Log In</a>
                    		</li>
                    		<li>
                        		<a href="#signup">Sign Up</a>
                    		</li>
                		</ul>
            		</div>
        		</div>
    		</nav>
		);
	}
}
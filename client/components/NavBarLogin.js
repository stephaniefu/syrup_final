import React from 'react';


export default class NavBarLogin extends React.Component {
	constructor(props){
		super(props);

		this.props.auth.handleAuthentication();
		
		
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	login(){
		this.props.auth.login()
	}

	logout() {
		this.props.auth.logout();
	}

	render(){
		// const { isAuthenticated } = this.props.auth;

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
                        		<a onClick={this.login}>Log In</a>
                    		</li>
                    		<li>
                        		<a onClick={this.login}>Sign Up</a>
                    		</li>
                		</ul>
            		</div>
        		</div>
    		</nav>
		);
	}
}


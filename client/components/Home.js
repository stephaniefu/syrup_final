import React from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';

export default class Home extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="intro-message">
				<NavBar />
				<HomePage />
			</div>
		);
	}
}

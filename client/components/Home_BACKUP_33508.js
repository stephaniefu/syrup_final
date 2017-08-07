<<<<<<< HEAD
import React from 'react';
import NavBar from './NavBar';
import NavBarLogin from './NavBarLogin';
import HomePage from './HomePage';

export default class Home extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div>
				<NavBarLogin/>
				<HomePage/>
			</div>
		);
	}
}
=======
import React from 'react'

const Home = () => (
  <div className="intro-message">
    <h1>Welcome to Syrup!</h1>
  </div>
)

export default Home
>>>>>>> feat/reactrouter

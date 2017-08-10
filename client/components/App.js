import React from 'react';
import NavBar from './NavBar';
import Main from './Main';

const App = (props) => {
	console.log(props);
	return(
	<div>
		<NavBar />
		<Main />
	</div>
	);
}

export default App
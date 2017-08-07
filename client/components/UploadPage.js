import React from 'react';
import NavBar from './NavBar';
import UploadSection from './UploadSection';

export default class UploadPage extends React.Component {
	constructor(){
		super();
	}

	render() {
		return (
			<div>
				<UploadSection />
			</div>
		)
	}

	// render(){
	// 	return(
	// 		<div>
	// 			<NavBar/>
	// 			<UploadSection/>
	// 		</div>
	// 	);
	// }
}
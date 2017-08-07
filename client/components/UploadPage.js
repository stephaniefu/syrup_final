import React from 'react';
import NavBar from './NavBar';
import UploadSection from './UploadSection';
import Footer from './Footer';
import MatchesUploadSection from './MatchesUploadSection';

export default class UploadPage extends React.Component {
	constructor(){
		super();
	}

	render() {
		return (
			<div>
				<NavBar/>
				<UploadSection/>
				<MatchesUploadSection/>
				<Footer/>
			</div>
		)
	}
}
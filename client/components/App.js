import React from 'react';
import NavBarLogin from './NavBarLogin';
import NavBar from './NavBar';
import Messages from './Messages/Messages';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UploadPage from './UploadPage';
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage'
import ownProfile from './ownProfile';
import Matches from './Matches';
import Auth from '../Auth/Auth';
import history from '../history';
import editProfile from './editProfile';

const auth = new Auth();


const App = () => {
	if(auth.isAuthenticated()) {
}

	return (

	<div>
		<BrowserRouter history={history}>
		<div>
		{auth.isAuthenticated() ? <NavBar auth={auth} /> : <LandingPage auth={auth}/> }
		<Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/upload' component={UploadPage}/>
      <Route exact path='/profile' component={ownProfile}/>
      <Route exact path='/matches' component={Matches}/>
      <Route exact path='/messages' component={Messages}/>
      <Route exact path='/editProfile' component={editProfile}/>
      <Route path='/:id' component={ProfilePage}/>
    </Switch>
		</div>
		</BrowserRouter>
	</div>
	)
}

export default App
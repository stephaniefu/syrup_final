import React from 'react';
import NavBarLogin from './NavBarLogin';
import Main from './Main';
import Messages from './Messages';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UploadPage from './UploadPage';
import ProfilePage from './ProfilePage'
import ownProfile from './ownProfile';
import Matches from './Matches';
import Auth from '../Auth/Auth';
import history from '../history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
	console.log('arguments', arguments);
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => {
	if(auth.isAuthenticated()) {
		console.log('this is the auth', auth)
	}

	return (
	<div>
		<BrowserRouter history={history}>
			<div>
		<NavBarLogin auth={auth}/> 
		<Messages />
		<Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/upload' component={UploadPage}/>
      <Route path='/profile' component={ProfilePage}/>
      <Route path='/ownProfile' component={ownProfile}/>
      <Route path='/matches' component={Matches}/>
      <Route path='/messages' component={Messages}/>
			{/* <Route path='/callback' render={(props) => {
				console.log('youre in callback path')
				handleAuthentication(props);
				return <UploadPage auth={auth}/>;
			}}/> */}
    </Switch>
		</div>
		</BrowserRouter>
	</div>
	)
}

export default App
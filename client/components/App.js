import React from 'react';
import NavBarLogin from './NavBarLogin';
import NavBar from './NavBar';
import Main from './Main';
import Messages from './Messages';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UploadPage from './UploadPage';
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage'
import ownProfile from './ownProfile';
import Matches from './Matches';
import Auth from '../Auth/Auth';
import history from '../history';

const auth = new Auth();

// const handleAuthentication = (nextState, replace) => {
// 	console.log('arguments', arguments);
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
// 		auth.handleAuthentication()
// 		.then((res) => {
// 			console.log(res)
// 		})
//   }
// }

const App = () => {
	if(auth.isAuthenticated()) {
		console.log('this is the auth', auth)
	}

	return (

// const App = (props) => {
// 	console.log(props);
// 	return(
	<div>
		<BrowserRouter history={history}>
			<div>
		{auth.isAuthenticated() ? <NavBar auth={auth} /> : <LandingPage auth={auth}/> }
		  {/* <NavBar auth={auth}/>    */}
		<Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/upload' component={UploadPage}/>
      <Route exact path='/profile' component={ProfilePage}/>
      <Route exact path='/ownProfile' component={ownProfile}/>
      <Route exact path='/matches' component={Matches}/>
      <Route exact path='/messages' component={Messages}/>
			 {/* <Route path='/callback' render={(props) => {
				console.log('youre in callback path')
				handleAuthentication(props);
				return <UploadPage auth={auth}/>; */}
			}}/> 
    </Switch>
		</div>
		</BrowserRouter>
	</div>
	)
}

export default App
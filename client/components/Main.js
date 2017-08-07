import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import UploadPage from './UploadPage';
import ProfilePage from './ProfilePage';
import Matches from './Matches';
import Messages from './Messages';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/upload' component={UploadPage}/>
      <Route path='/profile' component={ProfilePage}/>
      <Route path='/matches' component={Matches}/>
      <Route path='/messages' component={Messages}/>
    </Switch>
  </main>
)

export default Main;
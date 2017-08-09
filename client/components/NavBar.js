import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
      <div className="container topnav">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand topnav" to='/'>Syrup</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='/matches'>Matches</Link></li>
              <li><Link to='/messages'>Messages</Link></li>
              <li><Link to='/upload'>Upload</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to='/ownProfile'>Edit Profile</Link></li>
            </ul>
          </div>
      </div>
  </nav>
)

export default NavBar
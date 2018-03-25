import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import store from './store';

const root = store.root;
// const username = store.username;

class MobileSideNav extends React.Component {
  componentDidMount() {
    $('.button-collapse').sideNav({
      edge: 'left',
      closeOnClick: true
    });

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    });
  }
  render() {
    return (
      <div>
        <a data-activates="mobile-menu" className="button-collapse"><i className="material-icons">menu</i></a>
        <ul className="side-nav" id="mobile-menu">
          <li><Link to={`${root}`} className="active">Home</Link></li>
          <li><Link to={`/${root}${this.props.username}`}>Profile</Link></li>
        </ul>
      </div>
    );
  }
}

const UserDropdown = ({username}) => (
  <li id="dropdown-block">
    <a className="navbar-img dropdown-button" data-activates="user-dropdown">
      <img alt="loosleaf" className="mod-round" src="http://looseleafapp.com/assets/data/profile/photo/looseleaf.png" />
      <div className="arrow-down" />
    </a>
    <ul id="user-dropdown" className="dropdown-content">
      <li><Link to={`/${root}${username}`}>Profile</Link></li>
      <li><a href="/user">Stats</a></li>
      <li className="divider" />
      <li><a href={`/${root}${username}/settings`}>Settings</a></li>
      <li><a href="/auth/logout">Log out</a></li>
    </ul>
  </li>
);

export default class TopNav extends React.Component {
  render() {
    const username = this.props.user.username;

    let selected = '';

    if(typeof this.props.route.path === 'string') {
      selected = this.props.route.path.split('/').pop();
    }
    // TODO: Still need the code below?
/*
    if (typeof document !== 'undefined') {
        selected = document.location.pathname.split('/').pop();
        console.log('client rendered...selected=', selected)
        $(`#nav-${selected}`).trigger('click');
    }
*/
    return (
      <div className="navbar-fixed">
        <nav className="grey lighten-4">
          <div className="nav-wrapper-white nav-text-links">
            <div className="brand-logo">
              <Link className="navbar-brand" to={`/${root}`}>
                <img src="http://looseleafapp.com/assets/images/logo/logo.png" alt="LooseLeaf" />
              </Link>
            </div>
            <ul className="right hide-on-med-and-down">
              <li className={selected === root ? 'active' : ''}>
                <Link id={`nav-${root}`} to={`/${root}`}>Home</Link>
              </li>
              <li className={selected === username ? 'active' : ''}>
                <Link id={`nav-${username}`} to={`/${root}${username}`}>Profile</Link>
              </li>
              <li><Link to={`/${root}foo`}>Foo</Link></li>
              <li><button><i className="material-icons">notifications_none</i></button></li>
              <UserDropdown username={username} />
            </ul>
            <MobileSideNav username={username} />
          </div>
        </nav>
      </div>
    );
  }
}

import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "../styles/header.scss";


class Header extends Component {
  constructor() {
    super();

    this.handleProfileButton = this.handleProfileButton.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  handleSearchButton(e) {
    console.log('call to search')
    e.preventDefault();
    this.props.history.push('/');
  }

  handleProfileButton(e) {
    console.log('call to profile')
    e.preventDefault();
    this.props.history.push('/profile');
  }

  determineRenderForButtons() {
    if (this.props.currentUser.name) return (
      <div className="buttonsDiv">
        <button className='searchButton' onClick={this.handleSearchButton}>
          Search
      </button>
        <button className='profileButton' onClick={this.handleProfileButton}>
          Profile
      </button>
      </div>
    )
    else return
  }

  render() {
    return (
      <header className="header">
        <div >
          <span className="spanOne">Local</span>
          <span className="spanTwo">Host</span>
          <span className="spanThree"> 3000</span>
        </div>
        {this.determineRenderForButtons()}
      </header>
    );
  }
}

export default withRouter(Header);
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }


  // function
  renderProfile() {
    if (this.props.signedIn && !this.props.inEditMode) {
      return (
        <div>
          <ul>
            <li>Username: {this.props.currentUser.username}</li>
            <li>Email:
              <a href={`mailto:${this.props.currentUser.email}`} target="_blank" rel="noopener noreferrer">
                {this.props.currentUser.email}
              </a>
            </li>
            <li>Home: {this.props.currentUser.home}</li>
            <li>Type: {this.props.currentUser.type}</li>
          </ul>
          <button onClick={this.props.editProfile}>Edit Profile</button>
          <button onClick={this.props.deleteProfile}>Delete Profile</button>
        </div>
      );
    }
    if (this.props.signedIn && this.props.inEditMode) {
      return (
        <div>
          <form onSubmit={this.props.saveProfile}>
            Username:
            <input
              name='username'
              value={this.props.currentUser.username}
              onChange={this.props.editingProfile}
            ></input>
            Email:
            <input
              name='email'
              value={this.props.currentUser.email}
              onChange={this.props.editingProfile}
            ></input>
            Home:
            <input
              name='home'
              value={this.props.currentUser.home}
              onChange={this.props.editingProfile}
            ></input>
            <select defaultValue={this.props.currentUser.type} onChange={this.props.handleSelect}>
              <option value='Traveler'>Traveler</option>
              <option value='Local'>Local</option>
            </select>
            <button type='submit'>Save Profile</button>
          </form>
        </div >
      );
    }
  }

  render() {
    //(if not in edit mode)
    return (
      <div>
        {/* {this.props.signedIn && !this.props.inEditMode ? (
          <div>
            <ul>
              <li>Username: {this.props.currentUser.username}</li>
              <li>Email: {this.props.currentUser.email}</li>
              <li>Home: {this.props.currentUser.home}</li>
            </ul>
            <button onClick={this.props.editProfile}>Edit Profile</button>
          </div>
        ) : this.props.signedIn && this.props.inEditMode ? (
          <div>
            <form onSubmit={this.props.editProfile}>
              Username:
              <input
                name='username'
                value={this.props.currentUser.username}
                onChange={this.props.editingProfile}
              ></input>
              Email:
              <input
                name='email'
                value={this.props.currentUser.email}
                onChange={this.props.editingProfile}
              ></input>
              Home:
              <input
                name='home'
                value={this.props.currentUser.home}
                onChange={this.props.editingProfile}
              ></input>
              <button type='submit'>Confirm Profile</button>
            </form>
          </div>
        ) : null} */}
        {this.renderProfile()}
      </div>
    );
  }
}

export default Profile;

import React, { Component } from 'react';
import '../styles/profile.scss';

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
          <ul className="profileAttrContainer">
            <li className="profileAttr">Username: {this.props.currentUser.username}</li>
            <li className="profileAttr">Email:
              <a href={`mailto:${this.props.currentUser.email}`} target="_blank" rel="noopener noreferrer">
                {this.props.currentUser.email}
              </a>
            </li>
            <li className="profileAttr">Home: {this.props.currentUser.home}</li>
          </ul>
          <button className="profileButton" onClick={this.props.editProfile}>Edit Profile</button>
          <button onClick={this.props.deleteProfile}>Delete Profile</button>
        </div >
      );
    }
    if (this.props.signedIn && this.props.inEditMode) {
      return (
        <div>
          <form className="entire-profile-form" onSubmit={this.props.saveProfile}>
            <p>Username:</p>
            <input
              className="edit-profile-input"
              name='username'
              value={this.props.currentUser.username}
              placeholder='Username'
              onChange={this.props.editingProfile}
            ></input>
            <p>Email:</p>
            <input
              className="edit-profile-input"
              name='email'
              value={this.props.currentUser.email}
              placeholder="Email"
              onChange={this.props.editingProfile}
            ></input>
            <p>Home:</p>
            <input
              className="edit-profile-input"
              name='home'
              placeholder='Home'
              value={this.props.currentUser.home}
              onChange={this.props.editingProfile}
            ></input>
            <button className="profileButton" type='submit'>Confirm Profile</button>
          </form>
        </div>
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

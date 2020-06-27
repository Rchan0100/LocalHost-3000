import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Register from "./Register.jsx";
import Profile from "./Profile.jsx";
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import '../styles/app.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: {},
      inEditMode: false,
      signedIn: false,
    };

    this.addCurrentUser = this.addCurrentUser.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.editingProfile = this.editingProfile.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  addCurrentUser(user) {
    this.setState({ currentUser: user, signedIn: true }, () => console.log(this.state.currentUser));
  }

  editProfile() {
    this.setState({ inEditMode: true });
    // this.setState({...currentUser, user)
    // fetch('/api/profile/:id')
  }

  editingProfile(event) {
    this.setState(
      {
        currentUser: {
          ...this.state.currentUser,
          [event.target.name]: event.target.value,
        },
      },
      () => console.log(this.state.currentUser)
    );
  }

  handleSelect(e) {
    this.setState(
      {
        currentUser: {
          ...this.state.currentUser,
          type: e.target.value,
        },
      },
      () => console.log(this.state.currentUser)
    );
  }

  saveProfile(event) {
    event.preventDefault();
    // on click function that will send fetch request that will send put request to server with current user in body/params
    // the data we want in response will be the new user
    // we will want to set the currentUser in state to be the response
    let id = this.state.currentUser.id;
    fetch(`http://localhost:8080/api/profile/${id}`, {
      // /api/profile/12345
      method: 'PUT',
      body: JSON.stringify(this.state.currentUser),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => this.setState({ currentUser: data, inEditMode: false }, () => console.log(this.state.currentUser)))
      .catch(err => console.log(err));
  }

  deleteProfile(event) {
    event.preventDefault();
    let id = this.state.currentUser.id;
    fetch(`http://localhost:8080/api/profile/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ currentUser: {}, signedIn: false })
        this.props.history.push('/register');
      })
  }


  render() {
    return (
      <div className='app'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route
            exact
            path='/'
            component={() => (
              <Home currentUser={this.state.currentUser} addCurrentUser={this.addCurrentUser} />
            )}
          />
          <Route
            exact
            path='/register'
            component={() => <Register addCurrentUser={this.addCurrentUser} />}
          />
          <Route
            exact
            path='/profile'
            render={() => (
              <Profile
                inEditMode={this.state.inEditMode}
                currentUser={this.state.currentUser}
                editProfile={this.editProfile}
                editingProfile={this.editingProfile}
                signedIn={this.state.signedIn}
                saveProfile={this.saveProfile}
                deleteProfile={this.deleteProfile}
                history={this.props.history}
                handleSelect={this.handleSelect}
              />
            )}
          />
        </Switch>

      </div >
    );
  }
}

export default withRouter(App);
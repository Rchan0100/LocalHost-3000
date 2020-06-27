import React, { Component } from 'react';
import Login from './Login.jsx';
import Search from './Search.jsx';
import { withRouter, Link } from 'react-router-dom';

class Home extends Component {
  renderPage() {
    const { currentUser } = this.props;

    if (currentUser.name) {
      return (
        <div>
          <Search />
        </div>
      );
    } else {
      return <Login addCurrentUser={this.props.addCurrentUser} history={this.props.history} />;
    }
  }

  render() {
    return <div>{this.renderPage()}</div>;
  }
}

export default withRouter(Home);

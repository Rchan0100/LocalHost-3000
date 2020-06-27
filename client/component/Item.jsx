import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className='hosts'>
        <ul>
          <li>Username: {this.props.username}</li>
          <li>Name: {this.props.name}</li>
          <li>Email:{' '}
            <a href={`mailto:${this.props.email}`} target="_blank" rel="noopener noreferrer">
              {this.props.email}
            </a>
          </li>
          <li>Home: {this.props.home}</li>
        </ul>
      </div>
    );
  }
}

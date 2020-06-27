import React, { Component } from 'react';
import '../styles/bar.scss';

export default class Bar extends Component {
  render() {
    return (
      <div className="searchContainer">
        <form className="searchForm" method='POST' onSubmit={this.props.handleSubmit}>
          <input className="searchField" type='text' onChange={this.props.handleChange}></input>
          <button type='submit' className="submitButton">Search</button>
        </form>
      </div>
    );
  }
}

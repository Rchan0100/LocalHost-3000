import React, { Component } from 'react';
import List from './List.jsx';
import Bar from './Bar.jsx';
import '../styles/search.scss';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchVal: '',
      results: [],
      hasResults: false,
      error: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchVal: event.target.value });
  }

  handleSubmit(event) {

    // this.setState({ results: results, hasResults: true });
    let home = this.state.searchVal
    event.preventDefault();
    fetch(`http://localhost:8080/api/users/${home}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.err) {
          this.setState({ searchVal: '', error: 'No results found' })
          // window.alert("No users found!")
        } else {
          console.log('data')
          this.setState({ results: data, hasResults: true });
        }
      })
  }

  render() {
    if (!this.state.hasResults)
      return (
        <div>
          <Bar searchValue={this.state.searchVal} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
          {this.state.error ? <p className="searchError">{this.state.error}</p> : null}
        </div>
      );

    if (this.state.hasResults)
      return (
        <div>
          <Bar searchValue={this.state.searchVal} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
          <List searchResults={this.state.results} />
        </div>
      );
  }
}

export default Search;

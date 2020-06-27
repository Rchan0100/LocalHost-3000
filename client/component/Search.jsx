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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchVal: event.target.value });
  }

  handleSubmit(event) {
    // event.preventDefault();
    // let results = [
    //   {
    //     id: 5,
    //     username: 'test',
    //     password: 'test2',
    //     name: 't1',
    //     home: 'JPN',
    //     email: 't1@t1.com',
    //     type: 'traveler',
    //   },
    //   {
    //     id: 6,
    //     username: 'test',
    //     password: 'test2',
    //     name: 't1',
    //     home: 'USA',
    //     email: 'random@random.edu',
    //     type: 'traveler',
    //   },
    // ];

    // this.setState({ results: results, hasResults: true });
    let home = this.state.searchVal
    event.preventDefault();
    fetch(`http://localhost:8080/api/users/${home}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ results: data, hasResults: true });
      });
  }

  render() {
    if (!this.state.hasResults)
      return (
        <div>
          <Bar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        </div>
      );

    if (this.state.hasResults)
      return (
        <div>
          <Bar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
          <List searchResults={this.state.results} />
        </div>
      );
  }
}

export default Search;

import React, { Component } from 'react';
import Item from './Item.jsx';

class List extends Component {
  // iterate thru this.props.searchResults
  // with each iteration we want to render an Item component
  // we'll want to include JSX attributes on each Item component so the Item component can render a piece of the user object
  // some JSX attributes will be

  render() {
    const items = [];
    for (let user of this.props.searchResults) {
      items.push(
        <Item key={user.id} username={user.username} name={user.name} email={user.email} home={user.home} />
      );
    }
    return <div className="container">{items}</div>;
  }
}

export default List;

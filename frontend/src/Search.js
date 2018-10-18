import React, { Component } from 'react';
import './App.css';

class Search extends Component {

  render() {
    return (
      <div className="filter">
        <input id="title-filter" type="text" placeholder="Search Routes" onChange={event => this.props.searchRoutes(event.target.value)}/>
      </div>
    )}
}

export default Search;
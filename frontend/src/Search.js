import React, { Component } from 'react';
import './App.css';

class Search extends Component {

  render() {
    return (
      <div className="filter">
         { localStorage.token.length > 4 ? 
          <input id="title-filter" type="text" placeholder="Search Routes" onChange={event => this.props.searchRoutes(event.target.value)}/>
         : null }
      </div>
    )}
}

export default Search;
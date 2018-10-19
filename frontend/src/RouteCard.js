import React, { Component } from 'react';
import './App.css';

class RouteCard extends Component {

  personalizeRoutes = () => {
    let match1= this.props.currentUser.id
    const route = this.props.routes.filter(route => route.user_id === match1)
    return route;
  }

  render() {
    return (
      localStorage.token.length > 4 ?
      <div className="container">
        <div className="row">
          <div className="box">
              <h2>Click on route to view:</h2>
              {this.personalizeRoutes().map(route => {
              return <p key={route.id} onClick={event => this.props.displayRoute(route)} className="box-a">{route.name}</p>})}
              <button className="button small special align-center" onClick={this.props.addRoute}>Add Route</button>
          </div>
        </div>
      </div> : null
    )}
}

export default RouteCard;
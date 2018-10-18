import React, { Component } from 'react';
import './App.css';

class RouteCard extends Component {

  personalizeRoutes = () => {
    let match1= this.props.currentUser.id
    const route = this.props.routes.filter(route => route.user_id === match1)
    return route;
  }

  addRoute = () => {
    // render a form for detailed input
    // send post request to backend with information
    // fetch('http://localhost:3000/routes', {
    //   method: "POST",

    // })
    console.log("hello")
  }

  render() {
    return (
      this.props.currentUser ?
      <div class="container">
        <div class="row">
          <div class="box">
              <h2>Click on route to view:</h2>
              {this.personalizeRoutes().map(route => {
              return <p key={route.id} onClick={event => this.props.displayRoute(route)} class="box-a"><h3>{route.name}</h3></p>})}
              <button class="button small alt" onClick={this.addRoute}>Add Route?</button>
          </div>
        </div>
      </div> : null
    )}
}

export default RouteCard;
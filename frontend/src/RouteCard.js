import React, { Component } from 'react';

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
      <ol class="box">
        Click on route to edit:
        {this.personalizeRoutes().map(route => {
          return <li key={route.id} onClick={event => this.props.displayRoute(route)} class="box">{route.name}</li>})}
          <button class="button small alt hover" onClick={this.addRoute}>Add Route?</button>
      </ol> : null
    )}
}

export default RouteCard;
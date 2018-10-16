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
      <div>
        {this.personalizeRoutes().map(route => {
          return <button key={route.id}><p onClick={event => this.props.displayRoute(route)}>{route.name}</p></button>})}
          <button onClick={this.addRoute}>Add Your Route!</button>
      </div> : null
    )}
}

export default RouteCard;
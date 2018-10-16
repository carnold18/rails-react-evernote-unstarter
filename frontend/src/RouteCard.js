import React, { Component } from 'react';

class RouteCard extends Component {

  personalizeRoutes = () => {
    let match1= this.props.currentUser.id
    const route = this.props.routes.filter(route => route.user_id === match1)
    return route;
  }

  render() {
    return (
      this.props.currentUser ?
      <div>{this.personalizeRoutes().map(route => {
        return <button key={route.id}><p onClick={event => this.props.displayRoute(event.target)}>{route.name}</p></button>
      })}</div> : null
    )}
}

export default RouteCard;

//Path Forward!
// I can pass props down from App to RouteCard.
// I can console.log user information in both App and RouteCard.
// I can console.log route details from the backend.
// I need to be able to fetch the data appropriately and iterate (map/forEach) over the data to list user-specific notes.


 // constructor() {
  //   super();
  //   this.state = {
  //     routes: []
  //   }
  // }

  // componentDidMount() {
  //   const url = 'http://localhost:3000/routes'
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => {console.log(data); return data})
  //   .then(data => this.setState({routes: data}))
  // }
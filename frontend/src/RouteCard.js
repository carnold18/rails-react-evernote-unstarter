import React, { Component } from 'react';

class RouteCard extends Component {

  constructor() {
    super();
    this.state = {
      routes: []
    }
  }

  componentDidMount() {
    const url = 'http://localhost:3000/routes'
    fetch(url)
    .then(response => response.json())
    .then(data => {console.log(data); return data})
    .then(data => this.setState({routes: data}))
  }

  // if this.props.currentUser.id === routes.id show note else show nothing

    render() {
        // debugger
        // console.log(this.state)
        return(
            <div>
                {this.state.routes.map(route => {
                  return <h1>{route.name}</h1>
                })}
                {/* <p>Transportation</p>
                <p>Distance</p> */}
            </div>
        )
    }
}

export default RouteCard;

//Path Forward!
// I can pass props down from App to RouteCard.
// I can console.log user information in both App and RouteCard.
// I can console.log route details from the backend.
// I need to be able to fetch the data appropriately and iterate (map/forEach) over the data to list user-specific notes.
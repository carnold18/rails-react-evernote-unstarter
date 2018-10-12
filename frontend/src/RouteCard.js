import React, { Component } from 'react';

class RouteCard extends Component {

    constructor() {
    super()
    this.state = {
      routes: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/routes')
    .then(console.log)
    // .then(repsonse => repsonse.json())
    // .then(routes => this.setState({routes: routes}))
  }

    render() {
        return(
            <div>
                <h1>Route Name</h1>
                <p>Transportation</p>
                <p>Distance</p>
            </div>
        )
    }
}

export default RouteCard;
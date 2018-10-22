import React, { Component } from 'react';
import RouteCard from './RouteCard';
import RouteDetails from './RouteDetails';
import './App.css';

class RouteViews extends Component {

  state = {
    aRoute: false,
    eRoute: false
  }

  addRoute = () => {
    this.setState({
      aRoute: !this.state.aRoute,
      eRoute: false
    })
  }
    
    render() {
        return (
            <span className="route-view">
            <br />
            <br />
            <br />
            { this.props.routes.length > 0 ?
            <div className="route-container-left">
              <RouteCard addRoute={this.addRoute} 
              currentUser={this.props.currentUser} 
              routes={this.props.routes} 
              displayRoute={this.props.displayRoute} />
            </div>
            : null }
            <div className="route-container-right">
              <RouteDetails routeIsClicked={this.props.routeIsClicked} 
              currentUser={this.props.currentUser} 
              selectedRoute={this.props.selectedRoute} 
              aRoute={this.state.aRoute} 
              eRoute={this.state.eRoute} 
              getRidOfEdit={this.getRidOfEdit}
              />
            </div>
          </span>
        )
    }
}

export default RouteViews;
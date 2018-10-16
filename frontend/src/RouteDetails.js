import React, { Component } from 'react';

class RouteDetails extends Component {
    
    render() {
        return (
            this.props.selectedRoute ? 
            <div>
                <h1>{this.props.selectedRoute.name}</h1>
                <p>{this.props.selectedRoute.transportation}</p>
                <p>{this.props.selectedRoute.distance}</p>
            </div> : null
        )
    }
}

export default RouteDetails;
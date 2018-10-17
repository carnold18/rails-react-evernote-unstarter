import React, { Component } from 'react';
import './App.css';

class RouteDetails extends Component {

    editRoute = (event) => {
        event.preventDefault();
        // console.log(event.target[0].value)
        // console.log(event.target[1].value)
        const url = 'http://localhost:3000/routes/'+this.props.selectedRoute.id
        console.log(url)
        fetch(url, {
            method: "PATCH",
            body: JSON.stringify({
                name: event.target[0].value,
                transportation: event.target[1].value,
                distance: parseInt(event.target[2].value)
            }),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
              }
        })
        .then(console.log)
    }
    
    render() {
        return (
            this.props.selectedRoute ? 
            <div>
                <p>{this.props.selectedRoute.name}</p>
                <p>{this.props.selectedRoute.transportation}</p>
                <p>{this.props.selectedRoute.distance}</p>
                { this.props.selectedRoute.name ? (
                <form onSubmit={this.editRoute}>
                Route Name: <textarea
                    // type="text"
                    onChange={this.props.handleChange}
                    placeholder={this.props.selectedRoute.name}
                    name="route name"
                />
                Transportation Type: <textarea
                    // type="text"
                    onChange={this.props.handleChange}
                    placeholder={this.props.selectedRoute.transportation}
                    name="transportation"
                />
                Travel Distance: <textarea
                    // type="text"
                    onChange={this.props.handleChange}
                    placeholder={this.props.selectedRoute.distance}
                    name="distance"
                />
                <input type="submit" class="button small alt"/>
            </form> ) : null }
            </div> : null
        )
    }
}

export default RouteDetails;

            
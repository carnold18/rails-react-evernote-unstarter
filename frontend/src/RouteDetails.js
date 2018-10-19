import React, { Component } from 'react';
import './App.css';

class RouteDetails extends Component {

    state = {
        edit: false
    }

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
        // .then(console.log)
    }

    persistRoute = (event) => {
        event.preventDefault();
        const url = 'http://localhost:3000/routes'
        console.log(url)
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: event.target[0].value,
                transportation: event.target[1].value,
                distance: parseInt(event.target[2].value),
                user_id: parseInt(this.props.currentUser.id)
            }),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
              }
        })
        // .then(console.log)
    }

    destroyRoute = (event) => {
        event.preventDefault();
        const url = 'http://localhost:3000/routes/'+this.props.selectedRoute.id
        // console.log(url)
        fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
    }

    changeEditState = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    
    render() {
        return (
             (this.props.selectedRoute.id > 0 || this.props.aRoute) ? 
            <div className="box">
                { this.props.routeIsClicked ?
                <div className="box-a">
                    <p className="align-center"><h4>Route Name / Details:</h4> {this.props.selectedRoute.name}</p>
                    <p className="align-center"><h4>Transportation Type:</h4> {this.props.selectedRoute.transportation}</p>
                    <p className="align-center"><h4>Travel Distance (km):</h4> {this.props.selectedRoute.distance}</p>
                </div> : null
                }
                { this.props.routeIsClicked ? 
                    <div>
                        <button className="button small special align-center" onClick={this.changeEditState}>Edit Details</button>
                        <button className="button small special align-center" onClick={event => this.destroyRoute(event)}>Delete Route</button>
                    </div>
                : null }
                { this.state.edit ? (
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
                <input type="submit" className="button small special align-center"/>
            </form> ) : null }
            { this.props.aRoute ? (
                <form onSubmit={this.persistRoute}>
                Route Name: <textarea
                    // type="text"
                    onChange={this.props.handleChange}
                    placeholder="route name"
                    name="route name"
                />
                Transportation Type: <textarea
                    // type="text"
                    onChange={this.props.handleChange}
                    placeholder="transportation"
                    name="transportation"
                />
                Travel Distance: <textarea
                    // type="text"
                    onChange={this.props.handleChange}
                    placeholder="distance"
                    name="distance"
                />
                <input type="submit" className="button small special align-center"/>
            </form> ) : null }

            </div> 
            : null
        )
    }
}

export default RouteDetails;

            
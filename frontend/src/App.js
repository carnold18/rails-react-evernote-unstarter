import React, { Component } from 'react';
import './App.css';
import RouteCard from './RouteCard';
import RouteDetails from './RouteDetails';
import daLatVietnam from './daLatVietnam.JPG';

class App extends Component {

  state = {
    username: "",
    password: "",
    currentUser: {},
    routes: [],
    selectedRoute: {}
  }

  componentDidMount() {
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          this.setState({
            currentUser: data
          });
        }
      });
      // console.log(localStorage.token)
    const url = 'http://localhost:3000/routes'
    fetch(url)
      .then(response => response.json())
      // .then(data => {console.log(data); return data})
      .then(data => this.setState({routes: data}))
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  logIn = event => {
    event.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          localStorage.token = data.token;
          this.setState({
            currentUser: data.user
          });
        } else {
          this.setState({
            loginError: data.error
          });
        }
      });
  };

  logOut = e => {
    e.preventDefault();
    // debugger
    this.setState({
      username: "",
      password: "",
      currentUser: {}
    })

    localStorage.token = "";
  }

  displayRoute = (route) => {
    // console.log(route)
    return this.setState({selectedRoute: route})
  }

  render() {
    // console.log(this.state.currentUser);
    return (
      <div className="App">
        <div className="header">
          <h1>Vietnam Travel Cloud</h1>
          <img src={daLatVietnam} alt="logo" />
          <div className="login">
            <form onSubmit={this.logIn}>
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="username"
                name="username"
              />
              <input
                type="password"
                onChange={this.handleChange}
                placeholder="password"
                name="password"
              />
              <input type="submit" />
            </form>
            {this.state.currentUser.id ? (<button onClick={this.logOut}>Log Out</button>) : null}
            {this.state.currentUser.id ? (
              <h1>Welcome, {this.state.currentUser.username}!</h1>
            ) : null}
          </div>
          <div className="column">
            <RouteCard currentUser={this.state.currentUser} routes={this.state.routes} displayRoute={this.displayRoute} />
          </div>
          <div className="main">
            <RouteDetails selectedRoute={this.state.selectedRoute} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

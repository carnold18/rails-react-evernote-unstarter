import React, { Component } from 'react';
import './App.css';
import RouteCard from './RouteCard';
import RouteDetails from './RouteDetails';
import Header from './Header';

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

  logOut = () => {
    // event.preventDefault();
    // debugger
    this.setState({
      username: "",
      password: "",
      currentUser: {},
      routes: [],
      selectedRoute: {}
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
          <Header logIn={this.logIn} logOut={this.logOut} handleChange={this.handleChange} currentUser={this.state.currentUser} />
          <div className="column">
            <RouteCard currentUser={this.state.currentUser} routes={this.state.routes} displayRoute={this.displayRoute} />
          </div>
          <div className="main">
            <RouteDetails selectedRoute={this.state.selectedRoute} />
          </div>
      </div>
    );
  }
}

export default App;

// Goals for Tuesday, October 16

// Add search feature to route names - needs to be on RouteCard componenent. 
// Figure out Templated.
// Add create user on the main page - needs to be on App component.
// Be able to edit / update route details.
// Finalize auth work-arounds.

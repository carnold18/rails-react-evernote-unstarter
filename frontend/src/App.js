import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import RouteViews from './RouteViews';
import Footer from './Footer';
import Search from './Search';

class App extends Component {

  state = {
    username: "",
    password: "",
    currentUser: {},
    routes: [],
    selectedRoute: {},
    isMember: false,
    isLoggedIn: false, 
    input: ""
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
    fetch(url
    //   , {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${localStorage.token}`
    //   }
    // }
      )
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
            currentUser: data.user,
            isLoggedIn: true
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
      selectedRoute: {},
      isMember: false,
      isLoggedIn: false
    })

    localStorage.token = "";

  }

  displayRoute = (route) => {
    // console.log(route)
    return this.setState({selectedRoute: route})
  }

  handleMemberChange = (event) => {
    this.setState({
      isMember: !this.state.isMember
    })
  }

  searchRoutes = (input) => {
    this.setState({input: input})
    console.log(input)
  }

  searchedRouteList = () => {
    return this.state.routes.filter(route => route.name.toLowerCase().includes(this.state.input.toLowerCase()))
  }

  render() {
    // console.log(this.state.currentUser);
    return (
      <div className="App">
          <Header isLoggedIn={this.state.isLoggedIn} logIn={this.logIn} logOut={this.logOut} handleChange={this.handleChange} currentUser={this.state.currentUser} isMember={this.state.isMember} handleMemberChange={this.handleMemberChange} />
          <br />
          <Search searchRoutes={this.searchRoutes} />
          <RouteViews selectedRoute={this.state.selectedRoute} currentUser={this.state.currentUser} routes={this.searchedRouteList()} displayRoute={this.displayRoute} />
          <Footer />
      </div>
    );
  }
}

export default App;


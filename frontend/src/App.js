import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RouteCard from './RouteCard';

class App extends Component {

  state = {
    username: "",
    password: "",
    currentUser: {}
  };

  componentDidMount() {
    const token = localStorage.token;
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
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
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  logIn = e => {
    e.preventDefault();

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

    this.localStorage.token = ""
  }

  render() {
    console.log(this.state.currentUser);
    return (
      <div className="App">
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
        <button onClick={this.logOut}>Log Out</button>
        <header className="App-header">
          {this.state.currentUser.id ? (
            <h1>Hello {this.state.currentUser.username}</h1>
          ) : null}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RouteCard />
      </div>
    );
  }

  // render() {

  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>

  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }

}

export default App;

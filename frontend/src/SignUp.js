import React, { Component } from 'react';

class SignUp extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    createUser = (event) => {
        event.preventDefault();
        // debugger
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "user": 
                    {	
                    "username": this.state.username,
                    "email": this.state.email,
                    "password": this.state.password
                    }
            })
        })
        .then(response => response.json())
        .then(console.log)
        // .then(fetch("http://localhost:3000/login", {
        //     method: "POST",
        //     body: JSON.stringify({
        //       username: this.state.username,
        //       password: this.state.password
        //     }),
        //     headers: {
        //       "Content-Type": "application/json"
        //     }
        //   })
        //     .then(resp => resp.json())
        //     .then(data => {
        //       if (!data.error) {
        //         localStorage.token = data.token;
        //         this.setState({
        //           currentUser: data.user,
        //           isLoggedIn: true
        //         });
        //       } else {
        //         this.setState({
        //           loginError: data.error
        //         });
        //       }
        //     }))
    }
    
    render() {
        return (
            <div className="signup">
            <form onSubmit={this.createUser}>
                <input
                    type="text"
                    onChange={this.handleChange}
                    placeholder="username"
                    name="username"
                />
                <input
                    type="text"
                    onChange={this.handleChange}
                    placeholder="email"
                    name="email"
                />
                <input
                    type="password"
                    onChange={this.handleChange}
                    placeholder="password"
                    name="password"
                />
                <input type="submit" />
            </form>
        </div>
        )
    }
}

export default SignUp;
import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    
    render() {
        return (
            <div className="header">
                <h4 class="align-center">Already a Member?</h4>
                <h5 class="align-center">Sign In:</h5>
                <div className="login">
                    <form onSubmit={this.props.logIn}>
                        <input
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="username"
                            name="username"
                        />
                        <input
                            type="password"
                            onChange={this.props.handleChange}
                            placeholder="password"
                            name="password"
                        />
                        <input type="submit" class="align-center"/>
                    </form>
                    {this.props.currentUser.id ? (
                    <h1>Welcome, {this.props.currentUser.username}!</h1>
                    ) : null}
                    {this.props.currentUser.id ? (<button class="button small alt hover" onClick={this.props.logOut}>Log Out</button>) : null}
                </div>
            </div>
        )
    }
}

export default Login;
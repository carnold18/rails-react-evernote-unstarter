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
                        <input type="submit" class="button small special align-center"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
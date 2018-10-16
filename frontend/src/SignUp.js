import React, { Component } from 'react';

class SignUp extends Component {
    
    render() {
        return (
            <div className="signup">
            Become a Member!
            <form onSubmit={this.props.logIn}>
                <input
                    type="text"
                    onChange={this.props.handleChange}
                    placeholder="username"
                    name="username"
                />
                <input
                    type="text"
                    onChange={this.props.handleChange}
                    placeholder="email"
                    name="email"
                />
                <input
                    type="password"
                    onChange={this.props.handleChange}
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
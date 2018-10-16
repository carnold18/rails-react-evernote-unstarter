import React, { Component } from 'react';
import daLatVietnam from './daLatVietnam.JPG';

class Header extends Component {
    
    render() {
        return (
            <div className="header">
                <h1>Vietnam Travel Cloud</h1>
                <img src={daLatVietnam} alt="logo" />
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
                        <input type="submit" />
                    </form>
                    {this.props.currentUser.id ? (<button onClick={this.props.logOut}>Log Out</button>) : null}
                    {this.props.currentUser.id ? (
                    <h1>Welcome, {this.props.currentUser.username}!</h1>
                    ) : null}
                </div>
            </div>
        )
    }
}

export default Header;
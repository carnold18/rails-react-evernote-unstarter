import React, { Component } from 'react';
import Login from './Login';
import daLatVietnam from './daLatVietnam.JPG';
import SignUp from './SignUp';

class Header extends Component {
    
    render() {
        return (
            <div>
                <h1>Vietnam Travel Cloud</h1>
                <img src={daLatVietnam} alt="logo" />
                <Login logIn={this.props.logIn} logOut={this.props.logOut} handleChange={this.props.handleChange} currentUser={this.props.currentUser} />
                <SignUp />
            </div>
        )
    }
}

export default Header;
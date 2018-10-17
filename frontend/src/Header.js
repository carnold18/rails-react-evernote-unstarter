import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import IsMember from './IsMember';
import keBangPhongNha from './keBangPhongNha.JPG';

class Header extends Component {
    
    render() {
        return (
            <div>
                <h1 class="align-center">Vietnam Travel Cloud</h1>
                <img src={keBangPhongNha} alt="logo" class="image fit"/>
                <Login logIn={this.props.logIn} logOut={this.props.logOut} handleChange={this.props.handleChange} currentUser={this.props.currentUser} />
                <IsMember isMember={this.props.isMember} handleMemberChange={this.props.handleMemberChange}/>
                { this.props.isMember ? 
                <SignUp handleChange={this.props.handleChange}/> : null
                }
            </div>
        )
    }
}

export default Header;
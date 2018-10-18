import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import IsMember from './IsMember';
import keBangPhongNha from './keBangPhongNha.JPG';

class Header extends Component {
    
    render() {
        // debugger
        return (
            <div>
                <h1 class="align-center">Vietnam Travel Cloud</h1>
                <img src={keBangPhongNha} alt="logo" class="image fit"/>
                { localStorage.token.length >= 5 !== true ?
                <Login logIn={this.props.logIn} logOut={this.props.logOut} handleChange={this.props.handleChange} currentUser={this.props.currentUser} />
                : null }
                <div class="welcome-left">
                    {this.props.currentUser.id ? (
                    <h1>Welcome, {this.props.currentUser.username}!</h1>
                    ) : null}
                </div>
                <div class="welcome-right">
                    {this.props.currentUser.id ? (<button class="button small special align-center" onClick={this.props.logOut}>Log Out</button>) : null}
                </div>
                <div>
                { localStorage.token.length >= 5 !== true ?
                <IsMember isMember={this.props.isMember} handleMemberChange={this.props.handleMemberChange}/>
                : null}
                </div>
                { this.props.isMember ? 
                <SignUp handleChange={this.props.handleChange}/> : null
                }
            </div>
        )
    }
}

export default Header;
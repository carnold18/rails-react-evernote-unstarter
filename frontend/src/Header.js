import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import IsMember from './IsMember';
import keBangPhongNha from './keBangPhongNha.JPG';

class Header extends Component {
    
    render() {
        // debugger
        return (
            <div className="header">
                <h1 className="align-center">Vietnam Travel Cloud</h1>
                <img src={keBangPhongNha} alt="logo" className="image fit"/>
                { localStorage.token.length >= 5 !== true ?
                <Login logIn={this.props.logIn} logOut={this.props.logOut} handleChange={this.props.handleChange} currentUser={this.props.currentUser} />
                : null }
                <div className="welcome-left">
                    {this.props.currentUser.id ? (
                    <h1>Welcome, {this.props.currentUser.username}!</h1>
                    ) : null}
                </div>
                <br />
                <div className="welcome-right">
                    {this.props.currentUser.id ? (<button className="logout button small special align-center" onClick={this.props.logOut}>Log Out</button>) : null}
                </div>
                <div>
                    { localStorage.token.length >= 5 !== true ?
                    <div>
                    <IsMember isMember={this.props.isMember} handleMemberChange={this.props.handleMemberChange}/>
                    <div>
                        { this.props.isMember ? 
                        <SignUp handleChange={this.props.handleChange}/> : null
                        }
                    </div>
                    </div>
                    : null}
                </div>
            </div>
        )
    }
}

export default Header;
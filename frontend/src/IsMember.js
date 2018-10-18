import React, { Component } from 'react';
import './App.css';

class IsMember extends Component {
    
    render() {
        return (
            <div>
                <h4 class="align-center">Not a member, yet?</h4>
                <br /><button class="button small special align-center" onClick={this.props.handleMemberChange}>Join Us!</button>
                {/* Need to somehow center this button */}
            </div>
        )
    }
}

export default IsMember;
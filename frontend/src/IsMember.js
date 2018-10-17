import React, { Component } from 'react';
import './App.css';

class IsMember extends Component {
    
    render() {
        return (
            <div>
                Not a member, yet?
                <br /><button class="button small alt" onClick={this.props.handleMemberChange}>Join Us!</button>
            </div>
        )
    }
}

export default IsMember;
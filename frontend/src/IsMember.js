import React, { Component } from 'react';

class IsMember extends Component {
    
    render() {
        return (
            <div>
                <form>
                Not a member, yet?
                    <label>
                        <input
                            name="isMember"
                            type="checkbox"
                            onChange={this.props.handleMemberChange} />
                    </label>
                </form>
            </div>
        )
    }
}

export default IsMember;
import React, { Component } from 'react';

class PersonalProfile extends Component {
    render() {
        return (
            <div className='section'>
                <div className='leftside'>
                    <strong><i>Personal Profile</i></strong>
                </div>
                <div className='rightside'>
                    {this.props.desc}
                </div>
            </div>
        )
    }
}

export default PersonalProfile;
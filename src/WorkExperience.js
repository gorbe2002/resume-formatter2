import React, { Component } from 'react';

class WorkExperience extends Component {
    render() {
        return (
            <div className='section'>
                <div className='leftside'>
                    <strong><i>Work Experience</i></strong>
                </div>
                <div className='rightside'>
                    <strong>{this.props.title1}</strong><br></br>
                    <p>{this.props.desc}</p><br></br>
                    <strong>{this.props.title2}</strong><br></br>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default WorkExperience;
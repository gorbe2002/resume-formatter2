import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div className='skills'>
                <div className='leftside'>
                    <strong><i>Key Skills</i></strong>
                </div>
                <div className='rightside'>
                    {this.props.skill}<br></br>
                    {this.props.skill}<br></br>
                    {this.props.skill}
                </div>
                <div className='rightside'>
                    {this.props.skill}<br></br>
                    {this.props.skill}<br></br>
                    {this.props.skill}
                </div>
                <div className='rightside'>
                    {this.props.skill}<br></br>
                    {this.props.skill}<br></br>
                    {this.props.skill}
                </div>
            </div>
        )
    }
}

export default Skills;
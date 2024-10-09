import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div className='section'>
                <div className='leftside'>
                    <strong><i>Education</i></strong>
                </div>
                <div className='rightside'>
                    <strong>{this.props.school}</strong>
                    <p>
                        {this.props.bachelors}<br></br>
                        {this.props.bachelors_years}<br></br>
                        {this.props.bachelors_gpa}<br></br>
                    </p>
                    <br></br>
                    <strong>{this.props.school}</strong>
                    <p>
                        {this.props.masters}<br></br>
                        {this.props.masters_years}<br></br>
                        {this.props.masters_gpa}<br></br>
                    </p>
                </div>
            </div>
        )
    }
}

export default Education;
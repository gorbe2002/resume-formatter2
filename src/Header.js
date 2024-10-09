import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='leftside'>
                    <strong>{this.props.name}</strong><br></br>
                    {this.props.title}
                </div>
                <div className='rightside'>
                    Email: <a href="https://www.abc@gmail.com">{this.props.email}</a><br></br>
                    Web: {this.props.website}<br></br>
                    Mobile: {this.props.mobile}
                </div>
            </div>
        )
    }
}

export default Header;
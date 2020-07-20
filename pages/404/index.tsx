import React, { Component } from 'react'

export default class Custom404 extends Component<any, any> {
    state = {
        About: 'About',
    };

    render() {
        return (
            <div className='About-container'>aa{this.state.About}</div>
        )
    }
}

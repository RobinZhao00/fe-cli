import React, { Component } from 'react'

export default class Custom404 extends Component {
    state = {
        About: 'About',
    };

    render() {
        return <div className="About-container">aa{this.state.About}</div>
    }
}

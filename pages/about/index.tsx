import React, { Component } from 'react'
import { Button, TimePicker } from 'antd'

export default class About extends Component {
    render() {
        return (
            <div className='about-container'>
                <Button type='primary'>Primary Button</Button>
                <TimePicker />
            </div>
        )
    }
}

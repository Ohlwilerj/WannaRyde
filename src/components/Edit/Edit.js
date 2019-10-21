import React, { Component } from 'react'
// import {connect} from 'react-redux'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            message: '',
            profile_pic: ''

        }
    }

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    a


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './resorts.css'

export default class Resorts extends Component {
    constructor() {
        super()
        this.state = {
            resorts: []
        }
    }

    componentDidMount() {
        axios.get('/api/resorts').then(res => {
            this.setState({resorts: res.data})
        })
    }

    render() {
        const resortList = this.state.resorts.map(resorts => (
            <Link className='link-decoration' to={`/dashboard/${resorts.id}`}>
                <div className="resort-image-parent">
                    <img className="resort-image" src={resorts.image} alt={resorts.name}/>
                    <h3 className="list">{resorts.name}</h3>

                </div>
            </Link>
        ))
        return (
            <div className="resort-main">
                <div className="resort-header">
                    <h1>Resort Groups</h1>
                </div>
                <div className="resort-list">
                    {resortList}
                </div>
                {/* <Nav /> */}
            </div>
        )
    }
}

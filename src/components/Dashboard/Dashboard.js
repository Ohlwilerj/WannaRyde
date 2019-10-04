import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import {Link} from 'react-router-dom'
import './dashboard.css'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    // handleChange
    render() {
        console.log(this.props)
        return (
            <div className="main">
                <div className="posts-container">
                    <div className="add-post-button">
                        <Link className="link" to={`/post/${this.props.match.params.resortId}`}>
                            <button className="buttons">Add Post</button>
                        </Link>
                    </div>
                </div>
                
                <Nav />
            </div>
        )
    }
}

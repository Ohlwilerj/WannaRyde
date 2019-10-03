import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import {Link} from 'react-router-dom'

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
                <div className="post">
                    
                    <Link className="link" to={`/post/${this.props.match.params.resortId}`}>
                        <button>Add Post</button>
                    </Link>
                </div>
                
                <Nav />
            </div>
        )
    }
}

import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import axios from 'axios';
import './post.css'

export default class Post extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            message: '',

        }
    }


    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    addPost = async () => {
         let {title, message} = this.state
         await axios.post(`/api/post/new/`, {title, message})
         this.props.history.push(`/dashboard/${this.props.match.params.resortId}`)
    }

    render() {
        return (
            <div className="main">
                <div className="shadow-box">
                    <div className="title-container">
                     <h1>New Post</h1>
                        <p>Title:</p><input className="input-box" type="text"/>
                    </div>
                    <div className="message-container">
                        <p>Message:</p> 
                        <textarea className="message-input" cols="80" rows="15" placeholder="Message" type="text"/>
                    </div>
                    <div className="submit-button">
                        <button className="buttons" onClick={this.addPost}>Submit</button>
                    </div>
                </div>
                <Nav />
            </div>
        )
    }
}

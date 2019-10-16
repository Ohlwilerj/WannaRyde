import React, { Component } from 'react'
import axios from 'axios';
import './post.scss'
import {Link} from 'react-router-dom'

export default class Post extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            message: '',
            edit: false

        }
    }
    // clearState = () => {
    //     this.setState({
    //         title: '',
    //         message:'',
    //         edit: false
    //     })
    // }


    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    addPost = () => {
         let {title, message} = this.state
          axios.post(`/api/post/new`, {title, message, resort_id: this.props.match.params.resortId}).then(() => {
              this.props.history.push(`/dashboard/${this.props.match.params.resortId}`)
          })
    }

    // editPost = async () => {
    //     let edit = {
    //         title: this.state.title,
    //         message: this.state.message,
    //     }
    //     axios.put(`/api/posts/${this.props.id}`, edit).then(() => {
    //         this.clearState()
    //     })
    // }

    render() {
        return (
            <div className="main-post-container">
                <div className="sub-post-container">
                <div className="shadow-box">
                    <div className="title-container">
                     <h1>New Post</h1>
                        <p>Title:</p>
                        <input className="input-box" 
                        value={this.state.title} 
                        onChange={e => this.handleChange(e, 'title')} 
                        type="text"/>
                    </div>
                    <div className="message-container">
                        <p>Message:</p> 
                        <textarea className="message-input" 
                        value={this.state.message} 
                        onChange={e => this.handleChange(e, 'message')} 
                        cols="30" rows="15" placeholder="Message" type="text"/>
                    </div>
                    <div className="submit-button">
                        <Link to={`/dashboard/${this.props.match.params.resortId}`}>
                            <button className="buttons" onClick={this.addPost}>Submit</button>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

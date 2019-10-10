import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import Axios from 'axios';
import './chatroom.css'
import {Link} from 'react-router-dom'

export default class Chatroom extends Component {
    constructor() {
        super()
        this.state = {
            message: '',
            name: '',
        }
    }

    componentDidMount = () => {
        this.getOnePost()
    }

    handleChange = (e,key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    getOnePost = async () => {
        const res = await Axios.get(`/api/post/${this.props.match.params.postId}`)
        this.setState({
            // title: res.data[0].title,
            // content: res.data[0].content,
            // profile_pic: res.data[0].profile_pic,
            // name: res.data[0].name
        })
    }


    render() {
        return (
            <div className="main-chat-box">
                <div className="chat-box">
                        <h2>
                            {this.props.id}
                            {this.props.content}
                        </h2>
                    <div className="sub-chat-box">
                        <textarea className="chat-message" 
                        cols="100" rows="5"
                        value={this.state.message} 
                        onChange={e => this.handleChange(e, 'message')}/>
                        <button className="buttons">Submit</button>
                        <Link to={`/resorts/`}>
                            <div className="back-button">
                                <i className="fas fa-arrow-left"></i>
                            </div>
                        </Link>

                        </div>
                </div>
                <Nav />
            </div>
        )
    }
}

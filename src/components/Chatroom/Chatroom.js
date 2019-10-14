import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import axios from 'axios';
import './chatroom.css'
import {Link} from 'react-router-dom'
import io from 'socket.io-client'

export default class Chatroom extends Component {
    constructor() {
        super()
        this.state = {
            message: '',
            messages:[],
            name: '',
            profile_pic: '',
            title: '',
            inputMessage: '',
            date: ''
        }
        this.socket = io.connect(':4999')
        this.socket.on('room response', data => this.updateMessages(data))

    }


    componentDidMount = () => {
       this.getOnePost()
       if (this.props.room !== 'global') {
           this.socket.emit('join room', {room: this.props.match.params.postId})
           console.log(this.props.match.params)
    }}



    handleChange = (e,key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    getOnePost = () => {
        axios.get(`/api/post/${this.props.match.params.postId}`).then(res => {
            console.log(res)
             this.setState({
                 message: res.data[0].content, 
                 name: res.data[0].first_name + ' ' + res.data.last_name, 
                 profile_pic: res.data[0].profile_pic, 
                 title: res.data[0].title,
             })
         })
    }

    blast = () => {
        this.socket.emit (
            `blast to room socket`,
            {
                message: this.state.inputMessage,
                profile_pic: this.state.profile_pic,
                room: this.props.match.params.postId 
            }
        )
    }

    updateMessages = data => {
        this.setState({
            messages: [...this.state.messages, {message: data.message, profile_pic: data.profile_pic}]
        })
    }


    render() {
        const messages = this.state.messages.map((message, i) => (
            <div
                key={i}
                className={message.profile_pic === this.state.profile_pic ? 'bubble me' : 'bubble them'}>
                    {/* <img src={message.profile_pic} alt=""/> */}
                    <p>{message.message}</p>
                </div>
        ))
        return (
            <div className="main-chat-box">
                <div className="single-post">
                    <div className="content-box">
                        <h2>{this.state.title}</h2>
                        <h4>{this.state.message}</h4>
                    </div>
                        {/* <p>{this.state.name}</p>  */}
                        <div className="post-profile-pic" style={{
                            backgroundImage:`url(${this.state.profile_pic})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            width: '100px',
                            height: '100px',
                            borderRadius: '15px'
                        }}></div>   
                </div>
                <div className="chat-box">
                        <div className="chat-messages">
                            {messages}
                        </div>
                    <div className="sub-chat-box">
                        <textarea className="chat-message" 
                        cols="100" rows="5"
                        value={this.state.inputMessage} 
                        onChange={e => this.handleChange(e, 'inputMessage')}/>
                        <button className="buttons" onClick={this.blast}>Send</button>
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

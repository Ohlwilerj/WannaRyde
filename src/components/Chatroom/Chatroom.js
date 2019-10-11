import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import axios from 'axios';
import './chatroom.css'
import {Link} from 'react-router-dom'

export default class Chatroom extends Component {
    constructor() {
        super()
        this.state = {
            message: '',
            name: '',
            profile_pic: '',
            title: '',
            inputMessage: '',
            date: ''
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


    render() {
        return (
            <div className="main-chat-box">
                <div className="single-post">
                    <div className="content-box">
                        <h2>{this.state.title}</h2>
                        <p>{this.state. message}</p>
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
                    <div className="sub-chat-box">
                        <textarea className="chat-message" 
                        cols="100" rows="5"
                        value={this.state.inputMessage} 
                        onChange={e => this.handleChange(e, 'inputMessage')}/>
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

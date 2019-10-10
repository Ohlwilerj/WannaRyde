import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import {Link} from 'react-router-dom'
import './dashboard.css'
import axios from 'axios';
import Collapsible from 'react-collapsible'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(`/api/posts/${this.props.match.params.resortId}`).then(res => {
            this.setState({posts: res.data})
        })
    }

    deletePost = () => {
        let {postId} = this.props
        axios.delete(`/api/posts/${postId}`).then(() => {
            window.location.reload()
        })
    }



    render() {
        // console.log(this.props)
        let posts = this.state.posts.map((el) =>{
            console.log(el)
            return (
                <div className="delete-button">

                        <div className="post-box">
                                <Link key={el.id} to={`/chatroom/${el.id}`}>
                                    <div className="individual-posts">
                                        <h2>{el.title}</h2>
                                        <p>{el.name}</p>
                                    </div>
                                </Link>
                            <button className="buttons" onClick={this.deletePost}>X</button>
                        </div>
                </div>
            )
        })
        return (
            <div className="dashboard-parent">
                <div className="sub-dashboard">
                    <div className="posts-container">
                        <i className="fas fa-plus"></i>
                            <div className="posts">
                                {posts}
                            </div>
                        <div className="add-post-button">
                            <Link className="link" to={`/post/${this.props.match.params.resortId}`}>
                                <button className="buttons">Add Post</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Nav />
            </div>
        )
    }
}

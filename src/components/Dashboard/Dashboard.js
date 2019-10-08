import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import {Link} from 'react-router-dom'
import './dashboard.css'
import axios from 'axios';

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

    // getPosts() {
    //     axios.get(`/api/posts/${this.props.match.params.resortId}`).then(res => 
    //         {this.setState({posts: res.data})
    // })



    render() {
        // console.log(this.props)
        let posts = this.state.posts.map((el) =>{
            console.log(el)
            return (
                <Link key={el.id} to={`/chatroom/${el.id}`}>
                    <div className>
                        <h2>{el.title}</h2>
                        <p>{el.name}</p>
                    </div>
                </Link>
            )
        })
        return (
            <div className="main">
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
                <Nav />
            </div>
        )
    }
}

import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import {Link} from 'react-router-dom'
import './dashboard.css'
import Axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        Axios.get(`/api/posts/${this.props.match.params.resortId}`).then(res => {
            this.setState({allPosts: res})
        })
    }

    addToGroups = async () => {
        
    }


    render() {
        // console.log(this.props)
        let posts = this.state.posts.map((el) =>{
            return (
                <Link key={el.post_id} to={`/chatroom/${el.post_id}`}>
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
                    <i class="fas fa-plus"></i>
                    <div className="add-post-button">
                        <div className="posts">
                            {posts}
                        </div>
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

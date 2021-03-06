import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './dashboard.scss'
import axios from 'axios';
// import Collapsible from 'react-collapsible'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            edit: false,
            title: '',
            message: '', 
        }
    }

    componentDidMount() {
        this.getPosts()
    }

    deletePost = (id, resortId) => {
        axios.delete(`/api/delete/${id}`, resortId).then(() => {
            this.getPosts()
        }).catch(error => {console.log('Error in Dashboard', error)
    })
    }

    getPosts = () => {
        axios.get(`/api/posts/${this.props.match.params.resortId}`).then(res => {
            console.log(this.props)
            this.setState({posts: res.data})
        })
    }

    // addGroup = () => {
    //     axios.post('/api/groups').then(res => {
    //         this.
    //     })
    // }

    editPost = () => {
        let update = {
            title: this.state.title,
            price: this.state.message,
        }
        axios.put(`/api/products/${this.props.post_id}`, update).then(() => {
            this.clearState()
        })
    }

    clearState = () => {
        this.setState({
            title: '',
            message: ''
        })
    }





    render() {
        // console.log(this.props)
        let posts = this.state.posts.map((el) =>{
            console.log(el)
            return (
                <div className="delete-button">
                        <div className="post-box">
                                <Link className='link-decoration' key={el.id} to={`/chatroom/${el.post_id}`}>
                                    <div className="individual-posts">
                                        <h2>{el.title}</h2>
                                        <p>{el.name}</p>
                                        <div className="post-profile-pic" style={{
                                                backgroundImage:`url(${el.profile_pic})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                width: '100px',
                                                height: '100px',
                                                borderRadius: '15px'
                                                }}></div>
                                    </div>
                                </Link>
                            <button className="buttons" onClick={() => this.deletePost(el.post_id)}>X</button>
                        </div>
                </div>
            )
        })
        return (
            <div className="dashboard-parent">
                <div className="sub-dashboard">
                    <div className="posts-container">
                        {/* <i className="fas fa-plus"></i> */}
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
            </div>
        )
    }
}

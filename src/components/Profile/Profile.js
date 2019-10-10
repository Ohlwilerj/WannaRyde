import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import './profile.css'
import {connect} from 'react-redux'
import {updateUser} from './../../ducks/reducer'
import axios from 'axios'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            profile_pic: '',
            favResorts: [],
            edit: false,
        }
    }

    edit = () => {
        let update = {
            profile_pic: this.state.profile_pic
        }
        axios.put(`/api/update/${this.props.user.userId}`, update)
        .then(res => {this.setState({profile_pic: res.data})
    })
    }

    render() {
        return (
            <div className="parent-container">
                <div className="top-container">
                    <div className="rider-info">
                        <h1>Rider Info:</h1>
                        <h2>Name: {this.props.user && this.props.user.name}</h2>
                        <h2>Email: {this.props.user && this.props.user.email}</h2>
                        {/* <h4>Fav resorts:</h4>
                            <li></li> */}
                    </div>
                    <div className="profile-pic">
                        <img
                        src={this.props.user && this.props.user.profile_pic} 
                        alt=""/>
                            <button className="buttons" onClick={this.edit}>Edit</button>
                            <button className="buttons">Cancel</button>
                        <div className="profile-pic-buttons">
                        </div>
                    </div>
                    {/* <div className="edit-buttons">
                        <div className="rider-info-buttons">
                            <button className="buttons">Edit</button>
                            <button className="buttons">Cancel</button>
                        </div>
                    </div> */}
                </div>
                <div className="my-groups">
                    <h3>My Groups</h3>
                <div className="groups-list">[ ]</div>
                </div>
                
                <Nav />
            </div>
        )
    }
}
function mapStateToProps (reduxState) {
    const{user} = reduxState
    return {user}
}
export default connect(mapStateToProps, {updateUser})(Profile)
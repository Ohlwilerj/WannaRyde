import React, { Component } from 'react'
import './profile.scss'
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
        axios.put(`/api/update/${this.props.user.profile_pic}`, update)
        .then(res => {this.setState({profile_pic: res.data})
        })
    }
    clearState = () => {
        this.setState({
            profile_pic: '',
            edit: false
        })
    }

    addGroup = () => {
        axios.post('/api/groups').then(res => {
            this.setState({favResorts: res.data})
        }).catch(err => (`Resort couldn't be added`))
    }

    render() {
        console.log(this.state)
        return (
            <div className="parent-container">
                {/* <Nav /> */}
                <div className="top-container">
                    <div className="rider-info">
                        <h1>Rider Info:</h1>
                        <h3>Name: {this.props.user && this.props.user.name}</h3>
                        <h3>Email: {this.props.user && this.props.user.email}</h3>
                    </div>
                    <div className="profile-pic">
                        <img src={this.props.user && this.props.user.profile_pic} alt=""/>
                        <div className="profile-pic-buttons">
                            <button className="buttons" onClick={this.edit}>Edit</button>
                            <button className="buttons" onClick={this.clearState}>Cancel</button>
                        </div>
                    </div>
                </div>
                <div className="my-groups">
                    {/* <h3>My Groups</h3> */}
                    <div className="groups-list">
                    {/* [ ] */}
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps (reduxState) {
    const{user} = reduxState
    return {user}
}
export default connect(mapStateToProps, {updateUser})(Profile)
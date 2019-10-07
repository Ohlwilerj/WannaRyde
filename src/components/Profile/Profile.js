import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import Nav from './../Nav/Nav'
import './profile.css'
import {connect} from 'react-redux'
import {updateUser} from './../../ducks/reducer'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            profile_pic: '',
            favResorts: []
        }
    }

    // edit = () => {
    //     this.setState({
    //         profile_pic: 
    //     })
    // }

    render() {
        return (
            <div className="parent-container">
                <div className="top-container">
                    <div className="rider-info">
                        <h2>Rider Info:</h2>
                        <h4>Name: {this.props.user && this.props.user.name}</h4>
                        <h4>Email: {this.props.user && this.props.user.logEmail}</h4>
                        {/* <h4>Fav resorts:</h4>
                            <li></li> */}
                    </div>
                    <div className="profile-pic">
                        <img src={this.props.user && this.props.user.profile_pic} alt=""/>
                        <div className="profile-pic-buttons">
                            <button className="buttons">Edit</button>
                            <button className="buttons">Cancel</button>
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
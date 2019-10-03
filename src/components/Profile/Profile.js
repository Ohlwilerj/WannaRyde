import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import Nav from './../Nav/Nav'
import './profile.css'

export default class Profile extends Component {
    render() {
        return (
            <div className="main">
                <div className="top-container">
                    <div className="rider-info">
                        <h3>Rider Info:</h3>
                        <h4>Username:</h4>
                        <h4>Name:</h4>
                        <h4>Email:</h4>
                    </div>
                    <div className="profile-pic">
                        <img src="" alt=""/>
                    </div>
                    <div className="edit-buttons">
                        <div className="rider-info-buttons">
                            <button>Edit</button>
                            <button>Cancel</button>
                        </div>
                        <div className="profile-pic-buttons">
                            <button>Edit</button>
                            <button>Cancel</button>
                        </div>
                    </div>
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

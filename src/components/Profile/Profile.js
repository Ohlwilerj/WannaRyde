import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import Nav from './../Nav/Nav'
import './profile.css'

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="parent-container">
                <div className="top-container">
                    <div className="rider-info">
                        <h2>Rider Info:</h2>
                        <h4>Name:</h4>
                        <h4>Email:</h4>
                        <h4>Fav resorts:</h4>
                            <li></li>
                    </div>
                    <div className="profile-pic">
                        <img src="" alt=""/>
                    </div>
                    <div className="edit-buttons">
                        <div className="rider-info-buttons">
                            <button className="buttons">Edit</button>
                            <button className="buttons">Cancel</button>
                        </div>
                        <div className="profile-pic-buttons">
                            <button className="buttons">Edit</button>
                            <button className="buttons">Cancel</button>
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

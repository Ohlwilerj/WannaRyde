import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './nav.css'

class Nav extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="column-parent">
                <div className="top-links">
                    <Link className="profile" to='/profile'>
                        <img src={this.props.profilePic} alt=""/>
                    </Link>
                    <h4 className="username">{this.props.username}Username</h4>
                    <Link to="/resorts">
                        <h4 className="groups">Groups</h4>
                    </Link>
                <div className="logout-button">
                    <Link className="link" to="/">
                        <i className="fas fa-sign-out-alt"></i>
                    </Link>
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const{username, profilePic} = reduxState
    return {username, profilePic}
}

export default connect(mapStateToProps)(Nav)

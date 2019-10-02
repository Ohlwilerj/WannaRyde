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
                    <Link to='/profile'>
                        <img src="" alt=""/>
                    </Link>
                    <h4 className="username">{this.props.username}Username</h4>
                    <Link to="/resorts">
                        <h4 className="my-groups">MyGroups</h4>
                    </Link>
                <div className="logout-button">
                    <Link className="link" to="/">
                        <button className='logout-button1'>logout</button>
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

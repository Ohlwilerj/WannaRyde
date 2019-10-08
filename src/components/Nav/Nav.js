import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './nav.css'
import axios from 'axios'
import swal from 'sweetalert2'
import {updateUser} from '../../ducks/reducer'

class Nav extends Component {
    constructor() {
        super()
    }

    componentDidMount() {

    }

    async logout() {
        const res = await axios.delete('/auth/logout')
        this.props.updateUser(null)
        swal.fire(res.data.message)
    }
    render() {
        // console.log(this.props)
        return (
            <div className="column-parent">
                <div className="top-links">
                    <Link to='/profile'>
                        <div className="profile">
                            <img src={this.props.user && this.props.user.profile_pic} alt=""/>
                        </div>
                    </Link>
                    <Link to="/resorts">
                        <div className="groups-link">
                            <i className="fas fa-users">
                                {/* <h4 className="groups">Groups</h4> */}
                            </i>
                        </div>
                    </Link>
                <div className="logout-button" >
                    <Link className="link" to="/">
                        <i className="fas fa-sign-out-alt" onClick={() => this.logout()}></i>
                    </Link>
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const{user, profilePic} = reduxState
    return {user, profilePic}
}

export default connect(mapStateToProps, {updateUser})(Nav)

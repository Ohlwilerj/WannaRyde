import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './nav.scss'
import axios from 'axios'
import swal from 'sweetalert2'
import {updateUser} from '../../ducks/reducer'
import { Grid } from 'react-feather'
import {withRouter} from 'react-router-dom'

class Nav extends Component {
    
    componentDidMount(){
        console.log(this.props)
    }

    async logout() {
        const res = await axios.delete('/auth/logout')
        this.props.updateUser(null)
        swal.fire({text: res.data.message,type: 'success', timer: 1800})
    }
    render() {
        // console.log(this.props)
        if(this.props.location.pathname !== '/'){

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
                                <Grid size='60'></Grid>
                            </div>
                        </Link>
                        <Link className="link" to="/">
                            <div className="logout-button" >
                                <i className="fas fa-sign-out-alt" onClick={() => this.logout()}></i>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        } else {
            console.log('I was hit')
            return null
        }
    }
}

function mapStateToProps(reduxState) {
    const{user, profilePic} = reduxState
    return {user, profilePic}
}

export default connect(mapStateToProps, {updateUser})(withRouter(Nav))

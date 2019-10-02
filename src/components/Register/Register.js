import React, { Component } from 'react'
import swal from 'sweetalert2';
import axios from 'axios'
import {updateRider} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            loginPassword: '',
            regPassword1: '',
            regPassword2: '',
            firstName: '',
            lastName: '',
            profilePic: ''
        }
    }

    handleChange =(e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    async register() {
        const {username, email, regPassword1, regPassword2, firstName, lastName, profilePic} = this.state
        if(regPassword1 === regPassword2) {
            const res = axios.post('/auth/register', {username, email, regPassword2, firstName,lastName, profilePic})
            this.props.updateRider(res.data.user)
            swal.fire({type: 'success', text: res.data.message})
        } else {
            swal.fire({type: 'error', text: `Passwords don't match homie`})
        }
    }

    async login() {
        let res = await axios.post('/auth/login', {username: this.state.username, password: this.state.loginPassword
        })
        this.setState({
            rider: res.data.riderData
        })
        swal.fire(res.data.message)
    }


    render() {
        return (
            <div className="register-parent">
                <div className="register-form">
                    <div className="login-box">
                        <input type="text" placeholder='Username'/>
                    </div>


                </div>
                
            </div>
        )
    }
}

export default connect (null, {updateRider})(Register)
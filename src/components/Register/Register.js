import React, { Component } from 'react'
import swal from 'sweetalert2'
import axios from 'axios'
import {updateRider} from '../../ducks/reducer'
import {connect} from 'react-redux'
import './register.css'

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
            profilePic: '',
            regUsername: '',
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
            this.props.updateRider(res.data.rider)
            swal.fire({type: 'You did it', text: res.data.message})
        } else {
            swal.fire({type: 'error', text: `Passwords don't match homie`})
        }
    }

    async login() {
        let res = await axios.post('/auth/login', {username: this.state.username, password: this.state.loginPassword})
        this.setState({rider: res.data.riderData})
        swal.fire(res.data.message)
        this.props.history.push('/profile')
    }


    render() {
        return (
            <div className="register-parent">
                <div className="register-form">
                    <div className="login-box">
                        <input type="text" value={this.state.username} onChange={e => this.handleChange(e,"username")} placeholder='Username'/>
                        <input type="password" value={this.state.loginPassword} onChange={e => this.handleChange(e, "loginPassword")} placeholder='Password'/>
                    </div>
                    <div className="login-button">
                        <button onClick={() => this.login()}>Login</button>
                    </div>
                    <div className="name-box">
                        <input type="text" value={this.state.firstName} onChange={e => this.handleChange(e, "firstName")} placeholder='First Name'/>
                        <input type="text" value={this.state.lastName} onChange={e => this.handleChange(e, "lastName")}placeholder='Last Name'/>
                    </div>
                    <div className="username-email">
                        <input type="text" value={this.state.regUsername} onChange={e => this.handleChange(e, "regUsername")}placeholder='Username'/>
                        <input type="text" value={this.state.email} onChange={e => this.handleChange(e, "email")}placeholder='Email'/>
                    </div>
                    <div className="password-box">
                        <input type="password" value={this.state.regPassword1} onChange={e => this.handleChange(e, "regPassword1")}placeholder='Password'/>
                        <input type="password" value={this.state.regPassword2} onChange={e => this.handleChange(e, "regPassword2")}placeholder='Repeat Password'/>
                    </div>
                    <div className="register-button">
                        <button onClick={() => this.register()}>Register</button>
                    </div>


                </div>
                
            </div>
        )
    }
}

export default connect (null, {updateRider})(Register)
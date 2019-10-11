import React, { Component } from 'react'
import swal from 'sweetalert2'
import axios from 'axios'
import {updateUser} from '../../ducks/reducer'
import {connect} from 'react-redux'
import './register.css'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            loginPassword: '',
            firstName: '',
            lastName: '',
            email: '',
            regPassword1: '',
            regPassword2: '',
            profile_pic: '',
        }
    }

    handleChange =(e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    async register() {
        const {email, regPassword1, regPassword2, firstName, lastName, profile_pic} = this.state
        if(regPassword1 === regPassword2) {
            const res = await axios.post('/auth/register', {email, regPassword2, firstName,lastName, profile_pic})
            this.props.updateUser(res.data.user, res.data.loggedIn)
            swal.fire({type: 'success', text: res.data.message, timer: 1500 })
            this.props.history.push('/profile')
        } else {
            swal.fire({type: 'error', text: `Passwords don't match homie`})
        }
    }

    async login() {
        // const {logEmail, loginPassword} = this.state
        let res = await axios.post('/auth/login', {email: this.state.email, loginPassword: this.state.loginPassword})
        // console.log(res.data)
        if(res.data.user) {
            this.props.updateUser(res.data.user, res.data.loggedIn)
            swal.fire({text:res.data.message, type: 'success', timer: 2000})
            this.props.history.push('/profile')
        } else {
            swal.fire(res.data.message, '', 'success')
        }
    }


    render() {
        return (
                <div className="register-parent">
                    <h1>Letz Ryde</h1>
                    <div className="register-form">
                        <div className="login-box">
                            <input type="text" value={this.state.email} onChange={e => this.handleChange(e,"email")} placeholder='Email'/>
                            <input type="password" value={this.state.loginPassword} onChange={e => this.handleChange(e, "loginPassword")} placeholder='Password'/>
                        </div>
                        <div className="button">
                            <button className="buttons"onClick={() => this.login()}>Login</button>
                        </div>
                        <div className="name-box">
                            <input type="text" value={this.state.firstName} onChange={e => this.handleChange(e, "firstName")} placeholder='First Name'/>
                            <input type="text" value={this.state.lastName} onChange={e => this.handleChange(e, "lastName")}placeholder='Last Name'/>
                        </div>
                        <div className="username-email">
                            <input type="text" value={this.state.email} onChange={e => this.handleChange(e, "email")}placeholder='Email'/>
                        </div>
                        <div className="password-box">
                            <input type="password" value={this.state.regPassword1} onChange={e => this.handleChange(e, "regPassword1")}placeholder='Password'/>
                            <input type="password" value={this.state.regPassword2} onChange={e => this.handleChange(e, "regPassword2")}placeholder='Repeat Password'/>
                        </div>
                        <div className="profile-input">
                            <input type="text" onChange={e => this.handleChange(e, "profile_pic")} placeholder="Profile Image"/>
                        </div>
                        <div className="button">
                            <button className="buttons" onClick={() => this.register()}>Register</button>
                        </div>


                    </div>
                
                </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {user} = reduxState
    return {user} 
}

export default connect (mapStateToProps, {updateUser})(Register)
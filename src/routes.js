import Register from './components/Register/Register'
import Dashboard from './components/Dashboard/Dashboard'
import Resorts from './components/Resorts/Resorts'
import Profile from './components/Profile/Profile'
import Post from './components/Post/Post'
import Chatroom from './components/Chatroom/Chatroom'
import React from 'react'
import {Switch, Route} from 'react-router-dom'


export default (
    <Switch>
        <Route exact path='/' component={Register} />
        <Route path ='/dashboard/:resortId' component={Dashboard} />
        <Route path ='/resorts' component={Resorts} />
        <Route path ='/profile' component={Profile} />
        <Route path ='/post/:resortId' component={Post} />
        <Route path ='/chatroom' component={Chatroom} />
    </Switch>
)
require('dotenv').config()
const express = require('express')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./authController')
const resCtrl = require('./resortsController')
const postCtrl = require('./postController')

const app = express()

// TOP LEVEL MIDDLEWARE
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))


// ENDPOINTS

// AUTH ENDPOINTS
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.delete('/auth/logout', authCtrl.logout)

// RESORTS ENDPOINT
app.get('/api/resorts', resCtrl.getResorts)
app.put('/api/update/:id', resCtrl.editProfilePic)

// POSTS ENDPOINTS
app.get('/api/posts/:id', postCtrl.getPosts)
app.post('/api/post/new', postCtrl.addPost)
app.delete('/api/delete/:id', postCtrl.delete)
app.get('/api/post/:id', postCtrl.getOnePost)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Bring ${SERVER_PORT} people to help with my personal project`))
})
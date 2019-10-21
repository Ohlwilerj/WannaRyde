require('dotenv').config()
const express = require('express')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./authController')
const resCtrl = require('./resortsController')
const postCtrl = require('./postController')
const socket = require('socket.io')

const app = express()



// TOP LEVEL MIDDLEWARE
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB is connected')
})


// ENDPOINTS

// AUTH ENDPOINTS
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.delete('/auth/logout', authCtrl.logout)
app.put('/api/update/:id', authCtrl.editProfilePic)

// RESORTS ENDPOINT
app.get('/api/resorts', resCtrl.getResorts)

// POSTS ENDPOINTS
app.get('/api/posts/:id', postCtrl.getPosts)
app.post('/api/post/new', postCtrl.addPost)
app.delete('/api/delete/:id', postCtrl.delete)
app.get('/api/post/:id', postCtrl.getOnePost)
app.put('api/update/:id', postCtrl.editPost)


const server = app.listen(SERVER_PORT, () => console.log(`Bring ${SERVER_PORT} people to help with my personal project`))
const io = socket(server)
console.log('sockets are working')

io.on('connection', socket => {
    console.log('sockets are working')
// ROOM SOCKETS
    socket.on('blast to room socket', data => {
        console.log(`blast to room ${data.room}`)
        io.to(data.room).emit('room response', data)
    })

    socket.on('join room', data => {
        console.log('Room joined', data.room)
        socket.join(data.room);
        io.to(data.room).emit('room joined')
    })
})




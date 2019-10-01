require('dotenv').config()
const express = require('express')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const session = require('express-session')
const massive = require('massive')
const ctrl = require('./controller')

const app = express()

// TOP LEVEL MIDDLEWARE
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))


// ENDPOINTS



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Bring ${SERVER_PORT} people to help with my personal project`))
})
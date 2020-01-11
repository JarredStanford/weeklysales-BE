// Dependencies
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

//Routers
const AuthRouter = require('../auth/auth-router.js')

const server = express()

//Middleware
server.use(cors(), helmet(), express.json())

//Routes
server.use('/api/auth', AuthRouter)

//Sanity Check
server.get('/', (req, res) => {
    res.send('Welcome to Offsite Sales Tracker')
})

module.exports = server;
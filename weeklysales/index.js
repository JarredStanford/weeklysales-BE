require('dotenv').config()
require('express-async-errors')
const server = require('./api/server')

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`Your server is now running on port ${PORT}`)
})
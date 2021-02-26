const server = require('./app')

server.listen(3001, () => {
    console.log(`App is running at the port 3001`)
})

module.exports = server;
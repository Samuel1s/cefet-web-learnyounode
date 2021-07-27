const http = require('http')
const port = process.argv[2]

now = () => {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return `${date.toLocaleDateString('en-CA')} ${hour}:${minutes}`
}

const server = http.createServer()

server.on("connection", (socket) => {
    
    socket.end(now() + '\n')
})

server.listen(port)

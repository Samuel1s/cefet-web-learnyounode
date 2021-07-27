const http = require('http')
const fileSystem = require('fs')
const port = process.argv[2]
const file = process.argv[3]

http.createServer((request, response) => {
    fileSystem.createReadStream(file).pipe(response)

}).listen(+port, () => {
    console.log('Server on http://localhost:%s', port)
})
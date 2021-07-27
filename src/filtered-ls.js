const fileSystem = require('fs')

let path = require('path')
let dir = process.argv[2]
let filter = process.argv[3]

fileSystem.readdir(dir, (err, listFiles) => {
    if (err) 
        return console.error(err)
            
    listFiles.forEach( file => {
        if (path.extname(file) ===  '.' + filter) {
            console.log(file)
        }
    })     
})


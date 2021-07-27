const fileSystem = require('fs')
let path = require('path')

/* Exercicio 6. */
module.exports = (dir, filter, callback) => {

    fileSystem.readdir(dir, (err, listFiles) => {
        if (err) 
            return callback(err)

        listFiles = listFiles.filter( file => {
            return path.extname(file) === '.' + filter
        })
     
        callback(null, listFiles)
    })
}

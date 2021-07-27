const FS = require('fs')

let number_of_lines = FS.readFileSync(process.argv[2]).toString().split('\n').length - 1
console.log(number_of_lines)
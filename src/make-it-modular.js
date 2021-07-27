const filterD = require('./module.js')
let dir = process.argv[2]
let filter = process.argv[3]

/* Exercicio 6. */
filterD(dir, filter, (err, listFiles) => {
  if (err)
    return console.error(err)

  listFiles.forEach( file => {
    console.log(file)
  })
})
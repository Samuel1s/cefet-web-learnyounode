const fileSystem = require('fs')  
  
fileSystem.readFile(process.argv[2], (err, contents) => {  
  if (err)
    console.log(err)
      
  let number_of_lines = contents.toString().split('\n').length - 1  
  console.log(number_of_lines)  
})
const fs = require('fs'),
      path = './gulp/tasks',
      arrayPath = fs.readdirSync(path).map(fileName => fileName = path + '/' + fileName)
module.exports = arrayPath
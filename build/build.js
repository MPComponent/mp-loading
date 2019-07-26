const fs = require('fs-extra')
const path = require('path')
const dist = path.join(__dirname, '../dist')
const lib = path.join(__dirname, '../lib')
fs.removeSync(dist)
fs.removeSync(lib)

require('./compiler')

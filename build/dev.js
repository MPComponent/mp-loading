require('./compiler')

const fs = require('fs-extra');
const path = require('path');
const dist = path.join(__dirname, '../example/dist');

fs.removeSync(dist);

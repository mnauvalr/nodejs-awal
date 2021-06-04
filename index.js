// const fs = require('fs'); // core module
// const cetakNama = require('./coba'); //local module
// const moment = require('moment'); //third party module / npm module / node_modules

// console.log('Hello Nauval');

// const cetakNama = require('./coba');
// const PI = require('./coba');
const coba = require('./coba');

console.log(
    coba.cetakNama('Nauval'), 
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);



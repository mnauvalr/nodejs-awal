const validator = require('validator');
const chalk = require('chalk');
// console.log(validator.isEmail('mnauvalr27@gmail.com'));
// console.log(validator.isMobilePhone('081284356219', 'id-ID'));
// console.log(validator.isNumeric('08128435'));

// console.log(chalk.black.bgBlue('Hello World!'));
const nama = 'Nauval'
const pesan = chalk`Lorem, ipsum dolor {bgBlue.black sit amet} adipisicing elit. Nama saya ${nama}.`;
console.log(pesan);
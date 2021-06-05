// core module
//file system
const fs = require('fs');
const { stdin } = require('process');

// menuliskan string ke file (synchronus)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara Synchronus!');
// } catch (error) {
//     console.log(error);
// }

//menuliskan string ke file (asynchronus)
// fs.writeFile('data/test.txt', 'Hello World secara Asynchronus', (err) =>{
//     console.log(err);
// });

//membaca isi file (synchronus)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

//membaca isi file (asynchronus)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan nama anda: ', (nama) =>{
    rl.question('Masukkan no HP anda: ', (noHP) =>{
        // console.log(`Terimakasih ${nama}, sudah menginputkan ${noHP}`);
        const contact = { nama, noHP };
        const file = fs.readFileSync('contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('contacts.json', JSON.stringify(contacts));

        console.log('Terimakasih sudah memasukkan data.');

        rl.close();
    });
});
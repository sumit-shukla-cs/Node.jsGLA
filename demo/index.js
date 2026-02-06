// import {fun} from './functions/function.js';
// import fs from 'fs';
// import{error} from 'console';
// import path from 'path';
// import {greet,multi} from './utils.js';

// fun(5,10);



// const name = 'Sumit';
// console.log(greet(name));

// console.log('Hello, welcome to the Node.js demo project!');

// fs.readFile('./demo.txt', 'utf8', (err,data) => {
//     console.log(data);
// });

// const dynamicPath = path.join('demo', 'demo.txt');
// console.log('Dynamic path:', dynamicPath);

// const absolutePath = path.resolve('./demo.txt');
// console.log('Absolute path:', absolutePath);

const {greet,multi} = require('./utils.js');
const name = 'Sumit';
console.log(greet(name));

const multiply=multi(5,10);
console.log('Multiplication result:', multiply);
    
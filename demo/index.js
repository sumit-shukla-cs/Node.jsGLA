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

// const {greet,multi,add} = require('./utils.js');
// const name = 'Sumit';
// console.log(greet(name));

// const multiply=multi(5,10);
// console.log('Multiplication result:', multiply);

// const addition=add(5,10);
// console.log('Addition result:', addition);
const a = ()=>{
    b();
    console.log("~a ~a:");
}
const b = ()=>{
    c();
    console.log("~b ~b:");
}
const c = ()=>{
    console.log("~c ~c:");
}
a();
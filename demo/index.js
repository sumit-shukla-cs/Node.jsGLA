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
// const a = ()=>{
//     setTimeout(()=>{
//         console.log("async function1");
        
//     },10000);
//     setTimeout(()=>{
//         console.log("async function2");
//     },0);
//     b();
//     console.log("a");
// }
// const b = ()=>{
//     console.log("b");
// }
// a();

// 


// const fetchData = (a,b,cb) => {
//     cb(`${a+b}"Function 1 has processed the data."`);
// }
// const function2 = (data) => {

//     console.log("Function 2 received data: ", data);

// }
// // Calling function1 and passing function2 as a callback


// fetchData(2,2, function2);

// const {greet,multi,add,fetchData,function2} = require('./utils.js');

// const name = 'Sumit';
// console.log(greet(name));

// const multiply=multi(5,10);
// console.log('Multiplication result:', multiply);

// const addition=add(5,10);
// console.log('Addition result:', addition);


// fetchData(2,2, function2);  



// https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
//protocol: https
//domain: amazon.in
// path: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
//query parameters: ie=UTF8, node=1389401031, ref_=nav_cs_mobiles


// [
//     "node",
//     "index.js",
//     "add",
//     "1",
//     "2",
// ]

// const functionName = process.argv[2];
// const a = parseInt(process.argv[3]);
// const b = parseInt(process.argv[4]);
 
// console.log("arguments: " + a,b) ;

// const [ , , functionName, a, b] = process.argv;

// console.log("function name",functionName);

// console.log("value1",a);
// console.log("value2",b);

// if(functionName === "add"){
//     console.log("Addition result:",a+b);
// }

// if(functionName === "multi"){
//     console.log("Multiplication result:", a*b);
// }
 

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{

    const requestUrl = req.url;
    console.log("Received request for URL: ", requestUrl);
    const requestmethod = req.method;
    console.log("Request method: ", requestmethod);

    const logContent = `url: ${requestUrl}, Method: ${requestmethod}\n`;

    fs.appendFile("logs.txt", logContent, (err) => {
        if (err) console.error("Error writing to logs:", err);
    });

    if(requestUrl === "/"){
        res.end("Welcome to the home page!");
    }
    else if(requestUrl === "/about"){
        res.end("This is the about page.");
    }
    else if(requestUrl === "/contact"){
        res.end("This is the contact page.");
    
    }
    else{
        res.statusCode = 404;
        res.end("Page not found.");
    }
    // console.log("Received request: ", req);
    // res.end("Hello, this is a response from the server!",);
});

server.listen(3000);

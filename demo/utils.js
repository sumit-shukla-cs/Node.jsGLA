 const greet = (name) => {
  return `Hello, ${name}!`;
}
 const multi = (a,b)=>{
    return a*b;
}
const add = (a,b)=>{
    return a+b;
}
const fetchData = (a,b,cb) => {
    cb(`${a+b}"Function 1 has processed the data."`);
}
const function2 = (data) => {

    console.log("Function 2 received data: ", data);
}


module.exports = { greet, multi, add, fetchData, function2 };


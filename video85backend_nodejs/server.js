console.log("first backend code");
//one packgege is may depend on other pachage so we can use one packgee inside other
//if we delete node modult then when we use npm i then it will go inside the packge .json and find the depeendecy then install all thet packge

var slugify =require('slugify')

let a=slugify('some string')//some string 
//slug meand url in which some charector and space are not come 
//slugify convert the string in to the slug
console.log(a);

const b=slugify('some sluge','_')//some string
console.log(b);

//if we use the string other then some sluge it will conver tin a such a why thatit will looks like a slug

// nodejs.org

//create server is the  methos come from http package 
// import http from 'http';

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

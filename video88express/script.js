// // we use http module to create server using node js
// //server is not restarting automaticaly so we use npm i --global nodemon //so for all npm nodemon we get to restart server 
// //npm init --y no quation give package
// // nodemon --script.js server is noew get with restart
// // // const { createServer } = require('node:http');
// // // now we can not use require  becasuse type =module
// // import { http } from 'http';//wrong
// import { createServer } from 'http';  // Correct import for createServer
// const {createServer} =require('http')//may be not work
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> hello world r r r</h1>');
// //   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// //why we use express it is an web framework
// // http packge have limited capability  ,we have implement security from the start ,we cannot serv the static file ,also costiome code is requird for get post

// //npm i express
// //npm i express@4//specificaly v4 is install



//main contend of vedio 88

//now start code in express
const express = require('express')
const app = express()
const port = 3000

// static file
//imp tip backend code is note shown any time 
// if we give harry.txt globaly so we can access all the filess so for better security we use express
//so we use app.use(express.static('public'));//to show the files globaly which we want to show so no other file will go whatever file which we want to show is writen in public folder then give name of that folder
//and this file is shown as a static file only file return inside public folder is shown
app.use(express.static('public'));
app.use(express.static('files'));//we can create multiple files
// http://127.0.0.1:3000/harry.txt
// http://127.0.0.1:3000/package.json //this are not allowed if we write it inside the public or any other file inside the public then it will shown
// app.get or app.post or app.put or app.delete(path,handler)//
//here path is first argument and handler is an second argument which is a call back function
app.get('/', (req, res) => {//by default get request is there whenever we apply get request 
  //on app then this will send response 
  //here inside the handler request and response is come as a object
  res.send('Hello World! now jj')
})
//for post request we can create html file or we can use tool(post man)  
app.get('/about', (req, res) => {

res.send('Hello about')
})
app.get('/blog', (req, res) => {

res.send('Hello blog')
})
app.get('/contact', (req, res) => {

res.send('Hello contact')
})
app.get('/about', (req, res) => {

res.send('Hello World! now jj')
})

//this all path are work for that go to local host /about and other that  is  http://127.0.0.1:3000/blog
//if we dohttp://127.0.0.1:3000/harry cannot ger/harry is come

app.get('/blog/:slug', (req, res) => {
  // logic to fetch req.params.slug from the db
  console.log(req);//whenever we hit this that is run on local host then local object give the response  
  //control f to find params or any other thing

  // http://127.0.0.1:3000/blog/aboutd?mode=dark&region=in
  console.log(req.params);//this will give varible { slug: 'aboutd' } in the output (params return befor ? in url)
  console.log(req.query);//this will give the part { mode: 'dark', region: 'in' } return in url after the ? this is bessicaly the special condition give in url 
  res.send(`hello ${req.params.slug}`);
});
//req.params is object or function by ussing this we can access all the variable(parmeter) difind inside the url
//here whatever variable we write in slug like (aboutt,mongo_db,into_to_python,into_to_python) all are print so we dont need to use differe reauest like blog/into_to_js into_to_python which is explin bellow
//here we can use more then one variable also like '/blog/:slug/:second'






// -> this code is bulck and note redable so we not use it we use code given just abou it
// app.get('/blog/into_to_js', (req, res) => {
// //logic to fetch intro to js from the db
//   res.send('Hello /blog/into_to_js')
//   })
// app.get('/blog/into_to_python', (req, res) => {
// //logic to fetch intro to python from the db
//   res.send('Hello /blog/into_to_python')
//   })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//nodemon is used to restart server whenever change ocured automaticly other wise we has to do this by our own manualy
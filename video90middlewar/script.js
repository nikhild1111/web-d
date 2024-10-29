const express = require('express')
const app = express()
const port = 3000
const fs=require("fs");
const birds = require('./routes/birds')

//middlewear run for all the request
// middlewear is a function which having a ability to run before all the request and it have requset object by which we can modify the req heder it it have ability to send response
//we can also make specific middlewear for router
//ordering is like last come will excute the  middlewer write at the last  to modify req is consider
//whenever requst is comeing first it will go inside this if it will have that request then it will stop here no go ahead
// app.use(express.static("public"));//http://localhost:3000/harry.txt

app.use('/birds', birds)

// req is request obj which come
// res  is respond whcih is send
//if without using a res if we not give next then request is hanging no respond is given and controll not go to next 

//this is an syntax if we comment the next then request is hanging
//middelewear 1
// same middlever 1 is below  first comment that
// app.use((req,res,next)=>{
//   console.log("m1");
//   // next()//if we comment this then only m1 print no controll is go ahead
// })


//middelewear 1
app.use((req,res,next)=>{
  //by using middlewear we can modify request using req object
console.log(req.headers)//this will give all the headers
req.harry="I am harry bhai";//by using this we can modify heder 
//we can access the req.harry in any one of the bellow request see  http://localhost:3000/about in localhost

  console.log(`${Date.now()} is a ${req.method}`);//this will give timestamp at which time request is come to which we can convert into time and also it will give the type of request get post
   fs.appendFileSync("logs.txt",`${Date.now()} is a  ${req.method}\n`);
  //  res.send("hacked by hacker 1");//if we give this then it will be send and request stop here
  next()//if we give res.send("hacked by hacker 1"); (hedear) already then dont send next it will give error or dont use res.send("hacked by hacker 1"); directly hare
  // mostly we not use res.send("hacked by hacker 1"); here
})


//middelewear 2
app.use((req,res,next)=>{
  console.log("m2");
  req.harry="I am harry bhai";
  next()
})

// types of middleware
// go on express
// Application level middlewere (which we write)
// router level (which is write iniside the middle were)
//error handling (it write to handel error before excute)
// built-in middlewere(which we use to handle static file and more on express)
//third party(we just import that middlewear return by others and use it)



app.get('/', (req, res) => {//hare for "/" express use the handerler which callback function (req, res) => { res.send('Hello World!')
  res.send('Hello World!')//this means request is comming and respond send karo
})
app.get('/about', (req, res) => {
  res.send('Hello World!'+req.harry)
})
app.get('/contact', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
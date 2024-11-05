const express = require('express')
const app = express()
const port = 3000
const fs=require("fs");
const birds = require('./routes/birds')

//********middlewear run for all the request whtever the endpoint it doest matter it will run for all the request
///********* */ middlewear is a function which having a ability to run before all the request and it have requset object by which we can modify the req heder also it have  res object  to send response
//**********we can also make specific middlewear for router
///*********more then one middlewer can be present
///*******(last one will have the empact)ordering is like last one will excute with its all changes just like a media queary and the last one is consider
//**********whenever requst is comeing first it will go inside the middlwer if it will have that request endpoint then it will stop here if no go ahead using next()
//*********we can use middlewere for check login credintial as it run for all the request so we can use to check details using quary as it have req object   */
//**********key(any input) validation is also done by the middlewer*/
// app.use(express.static("public"));//this is an built in middlwer//http://localhost:3000/harry.txt
//
app.use('/birds', birds)//this middlwer is regarding to the router here /bird is endpoint then http://localhost:3000/birds go on this it will show the content present in birds.js file in which the /  endpoint and for other wright its name
//router are used to arenge the files and code data sequentialy

// req is request obj which come
// res  is respond whcih is send
//if without using a res if we not give next then request is hanging no respond is given and controll not go to next 

//this is an syntax if we comment the next then request is hanging
//middelewear 1
// same middlever 1 is below  first comment that may be give error if run both at same time
// app.use((req,res,next)=>{
//   console.log("m1");
//   // next()//if we comment this then only m1 print no controll is go ahead
// })


//middelewear 1
app.use((req,res,next)=>{
  //by using middlewear we can modify request using req object before request is going to the routs so it is helpfull to handle errors and the make changes
console.log(req.headers)//this will give all the headers
req.harry="I am harry bhai";//by using this we can modify heder  and here we adding the harry in the hader using the req
//we can access the req.harry in any one of the bellow request see  http://localhost:3000/about in localhost

  console.log(`${Date.now()} is a ${req.method}`);//this will give timestamp at which time request is come to which we can convert into time and also it will give the type of request get post
   fs.appendFileSync("logs.txt",`${Date.now()} is a  ${req.method}\n`);//this will appent int he file data about request like which and at which time request is come time 
  //  res.send("hacked by hacker 1");//if we give this then it will be send to the screen and request stop here
  next()//if we give res.send("hacked by hacker 1"); (hedear) already then dont send next it will give error or dont use res.send("hacked by hacker 1");  hare
  // mostly we not use res.send("hacked by hacker 1"); here
})


//middelewear 2
app.use((req,res,next)=>{
  console.log("m2");
  req.harry="I am rohan bhai";
  next()
})

// types of middleware
// go on express
// Application level middlewere (which we write using app.use())
// router level (which is write iniside the specific router )
//error handling (it write to handel error before excute)
// built-in middlewere(which we use to handle static file and more on express)//which is present in the expres package
//third party(we just import that middlewear return by others and use it using the app.use (syntax on express website) )



app.get('/', (req, res) => {//hare for "/" express use the handerler which callback function (req, res) => { res.send('Hello World!')
  res.send('Hello World!')//this means request is comming and respond send karo
})
app.get('/about', (req, res) => {
  res.send('Hello World!'+req.harry)///here we access harry
})
app.get('/contact', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
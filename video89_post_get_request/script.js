// first        npm init -y
// second step->npm i express@4 

const express = require('express')
const blog=require('./routes/blog')
const shop=require('./routes/shop')
const app = express()
const port = 3000
app.use(express.static("public"))
app.use('/blog',blog)// *** \blog endpoint handale by this and the /blog/ first request and /blog/about second request
app.use('/shop',shop)//this is for /shop endpoint
app.get('/', (req, res) => {
  console.log("its a get request ");//this console is shown in owr server console
  res.send('Hello World! get')
})
//get is basic request brower use by default it
//we have to  send login details and we can not send it in server  logs otherwise all can see it so we use post request and also get request have limit on charector if we include much more data then may be get requst is discard
// so it is only use to send small quary 
// for larg text and blog we use post request

//we can test get requst on browser but we cannot test post request so we html page or postman
//we can test our post request for that we are creating a html web page and hit to the post request and out put is shown on console but this was not he best why  
app.post('/', (req, res) => {
  console.log("its a post request ");//this console is shown in our server console
  res.send('Hello World! post')//this is shown to screen visible to all

})

app.put('/', (req, res) => {//put request for making a changes
  console.log("Hey its a put request")
  res.send('Hello World put!')
})

//channing is bessicaly send requst one after another so write in a chain
// app.get('/', (req, res) => {
//   console.log("its a get request ");//this console is shown in owr server console
//   res.send('Hello World! get')
// }).post('/', (req, res) => {
//   console.log("its a post request ");//this consol is shown in owr server console
//   res.send('Hello World! post')//this is shown to screen visible to all

// }).put('/', (req, res) => {
//   console.log("Hey its a put request")
//   res.send('Hello World put!')
// })


//this is uesd to send html file (i.e rendering to the user for the input)
app.get('/index', (req, res) => {
  console.log("hay its index");//this console is shown in owr server console
  // res.send('Hello World! index')//this is shown to screen visible to all
  // res.sendFile('template/index.html')//this will give error beasuse we give only relative path so we has to spresify root or absoulte path
  // res.sendFile('template/index.html',{root:__dirname})//we not only want to show 'Hello World! index' but we want to render html page(send the content of html page) so we use this
  res.sendFile("C:\\Users\\domad\\OneDrive\\Documents\\Desktop\\allcode\\web d\\video89_post_get_request\\template\\index.html")
})

// this is used to send  responce in a json form
app.get('/api', (req, res) => {
  res.json({a:1, b:2, c:3,d:4,name:["harry","nikhil"]})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// postman is a softwere
//router help to orgnize code rayata na fele is liye
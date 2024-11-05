const express = require('express')
const app = express()
const port = 3000
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
//we use ejs to render the data dinamicaly
//***Ejs is the (templete)view engine and we use template(view) engine to fit the variable inside the views/index.ejs(bassisacaly we render the value of variable inside the template or index.ejs)
//there are diffrent types of view engine so set view engine as ejs, pug ,templte engine handle bar this are another view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  let sitename = "Adidas";
  let searchText = "search now";
  // res.sendFile("template/index.html",{root:__dirname})//difine root other wise it will givw error  
  // res.sendFile("views/index.ejs",{root:__dirname})//difine root other wise it will givw error  
  // //using send file we directly send the file which anyone can download 
// when using a render write onlt file name no extention 
// In web development, render generally refers to the process of generating and displaying content (usually HTML) on the client side (browser).
//******************the file wich we want to render is must be present inside the views folder
res.render("index", { sitename: sitename,  searchText : searchText })
});

app.get('/blog/:slug', (req, res) => {
    //here we are creatin this veriable and this value are come from the data base and we want to add this content in the diffrent file for the diffret end point and there are n number of n poind so we cnanot make the n number of html file so we are using tha ejs(template engine) 
  let blogtile="adidas why and when?";
  let blogcontent="its a very good brand";
  let arr=["one",2,"three"];
  //using send file we directly send the file
  // here we use res.render so that we can render view template
  // In web development, render generally refers to the process of generating and displaying content (usually HTML) on the client side (browser).
  res.render("blogpost",{blogtile:blogtile,blogcontent:blogcontent,arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
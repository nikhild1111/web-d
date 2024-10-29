const express = require('express')
const app = express()
const port = 3000
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
//***Ejs is the (templete)view engine and we use template(view) engine to fit the variable inside the views/index.ejs(bassisacaly we render the value of variable inside the template or index.ejs)
//there are diffrent types of view engine so set view engine as ejs, pug ,templte engine handle bar this are another view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let sitename = "Adidas";
  let searchText = "search now";
  // res.sendFile("template/index.html",{root:__dirname})//difine root other wise it will givw error
// when using a render write onlt file name no extention
res.render("index", { sitename: sitename,  searchText : searchText })
});

app.get('/blog/:slug', (req, res) => {
  let blogtile="adidas why and when?";
  let blogcontent="its a very good brand";
  //using send file we directly send the file
  // here we use res.render so that we can render view template
  // In web development, render generally refers to the process of generating and displaying content (usually HTML) on the client side (browser).
  res.render("blogpost",{blogtile:blogtile,blogcontent:blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
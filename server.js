import express from "express";

//create express app
const app = express()
// configuer the app(app.set)


//mount routes
app.get('/', function (req,res) {
  res.send('<h1> hello, Im your teacher</h1>')
})

//tell the app to listen on port 3000
app.listen(3000, function(){
  console.log("this is listening")
})


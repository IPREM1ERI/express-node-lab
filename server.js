import express from 'express';
import { students } from './data/student-data.js';

//create express app
const app = express()
// configuer the app(app.set)
app.set('view engine','ejs')

//mount routes
app.get('/', function (req,res) {
  res.send('<h1> hello, Im your teacher</h1>')
})

app.get('/home', function(req,res) {
  res.render('home')
})

app.get('/students', function(req,res) {
  res.render('students/index')
})

//tell the app to listen on port 3000
app.listen(3000, function(){
  console.log('this is listening')
})


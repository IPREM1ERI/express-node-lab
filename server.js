import express from 'express';
import { students } from './data/student-data.js';

//create express app
const app = express()
// configuer the app(app.set)
app.set('view engine','ejs')

//mount routes
app.get('/', function (req,res) {
  res.redirect('/home')
})

app.get('/home', function(req,res) {
  res.render('home')
})

app.get('/students', function(req,res) {
  res.render('students/index', {
    students:students
  })
})

//tell the app to listen on port 3000
app.listen(3000, function(){
  console.log('this is listening')
})


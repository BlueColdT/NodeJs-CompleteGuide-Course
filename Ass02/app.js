const express = require('express')

const app = express();

/* app.use((req, res, next) => {
  console.log("First log")
  next();
})

app.use((req, res, next) => {
  console.log("second log")
  res.send("<h1>This is a response.</h1>")
}) */

app.use('/users', (req, res)=> {
  res.send('<h1>Users Page</h1>')
})

app.use((req, res)=> {
  res.send('<h1>Main Page</h1>')
})

app.listen(3000);
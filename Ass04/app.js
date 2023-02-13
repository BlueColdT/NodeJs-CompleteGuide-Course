const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const mainRoutes = require('./routes/main')
const usersData = require('./routes/users')

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', usersData.routes)
app.use(mainRoutes)

app.listen(3000);
const express = require('express');
const path = require('path')

const router = express.Router();

const users = [];
router.get('/', (req, res) => {
  res.render('users.ejs', {
    pageTitle: 'Users',
    users: users
  })
})

router.post('/', (req, res) => {
  users.push(req.body.name)
  res.render('users.ejs', {
    pageTitle: 'Users',
    users: users
  })
})

exports.routes = router;
exports.users = users;
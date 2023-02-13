const express = require('express');
const { Module } = require('module');
const path = require('path')

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs', {
    pageTitle: 'Index'
  })
})

module.exports = router;
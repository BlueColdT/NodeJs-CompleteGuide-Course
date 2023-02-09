const express = require('express');
const { Module } = require('module');
const path = require('path')

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views',  'index.html'))
})

module.exports = router;
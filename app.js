// import express from 'express';
// import bodyParser from 'body-parser';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

router.use((req, res, next) => {
  // console.log('something is happend!');
  next();
});

router.route('/api')
      .get((req, res) => {
        res.send('hello world!')
      })

app.use('/', router);

app.listen(3000,()=>{
  console.log('listening in port 3000....')
});
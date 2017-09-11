// import express from 'express';
// import bodyParser from 'body-parser';
// import db from './db';
//const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use((req, res, next) => {
  // console.log('something is happend!');
  next();
});

router.route('/api')
      .get((req, res) => {
        res.send('hello world!')
       /* db.Articles.find((err, articles) => {
          if (err) {
            res.send(err);
            return;
          }
          // articles.forEach( article => {
          //   article.date = moment(objectidToTimestamp(article._id)).format('YYYY-MM-DD');
          // } );

          res.json(articles);
        });*/
      })

     /* .post((req, res) => {
        new db.Articles(req.body.postInformation).save((err) => {
          if (err) res.send(err);
          res.json({ message: 'new article has been created' });
        });
      });*/


app.use('/', router);

app.listen(3000,()=>{
  console.log('listening in port 3000....')
});
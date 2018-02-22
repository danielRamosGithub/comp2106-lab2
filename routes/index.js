var express = require('express');
var router = express.Router();

/* Osvaldo */
router.get('/osvaldo', function(req, res, next) {
  res.render('osvaldo', { 
    title: 'Lab 2',
    pageTitle: 'Osvaldo',
    message: 'Is the father of all. A retired engineer that still have a lot of love of what he does and has a big heart.'
  });
});

/* Angela */
router.get('/angela', function(req, res, next) {
  res.render('angela', { 
    title: 'Lab 2',
    pageTitle: 'Angela',
    message: 'Is the mother, is the soul and the center of us all. Everything that we need she does with a open heart.'
  });
});

/* Gabriel */
router.get('/gabriel', function(req, res, next) {
  res.render('gabriel', { 
    title: 'Lab 2',
    pageTitle: 'Gabriel',
    message: 'Is the artist of the family. Has a great talent and know how to show it.'
  });
});

/* Bruno */
router.get('/bruno', function(req, res, next) {
  res.render('bruno', { 
    title: 'Lab 2',
    pageTitle: 'Bruno',
    message: 'Is the doctor to be. Is a student focusing on becoming a great doctor. He will take care of the whole family.'
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Lab 2',
    pageTitle: 'Daniel',
    message: 'The oldest son of three. Is trying to make a living in Canada and so far is enjoying the ride.'
  });
});

module.exports = router;

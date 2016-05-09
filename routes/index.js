var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'David Menendez Portfolio' });
});
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

//Portfolio Entries
router.get('/portfolio/hadassah', function(req, res, next) {
  res.render('portfolio/hadassah', { title: 'About' });
});
router.get('/portfolio/colorado-childrens-hospital', function(req, res, next) {
  res.render('portfolio/colorado-childrens-hospital', { title: 'About' });
});
router.get('/portfolio/blackbaud', function(req, res, next) {
  res.render('portfolio/blackbaud', { title: 'About' });
});
router.get('/portfolio/be-a-character', function(req, res, next) {
  res.render('portfolio/be-a-character', { title: 'About' });
});
router.get('/portfolio/bridgewater', function(req, res, next) {
  res.render('portfolio/bridgewater', { title: 'About' });
});
router.get('/portfolio/national-hamburger-month', function(req, res, next) {
  res.render('portfolio/national-hamburger-month', { title: 'About' });
});
router.get('/portfolio/zimmerman-blog', function(req, res, next) {
  res.render('portfolio/zimmerman-blog', { title: 'About' });
});
router.get('/portfolio/bikestreet', function(req, res, next) {
  res.render('portfolio/bikestreet', { title: 'About' });
});
router.get('/portfolio/hottest-halloween', function(req, res, next) {
  res.render('portfolio/hottest-halloween', { title: 'About' });
});

module.exports = router;
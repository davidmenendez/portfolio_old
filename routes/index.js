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
  res.render('portfolio/hadassah', { title: 'Hadassah' });
});
router.get('/portfolio/colorado-childrens-hospital', function(req, res, next) {
  res.render('portfolio/colorado-childrens-hospital', { title: 'Colorado Childrens Hospital' });
});
router.get('/portfolio/blackbaud', function(req, res, next) {
  res.render('portfolio/blackbaud', { title: 'Blackbaud' });
});
router.get('/portfolio/be-a-character', function(req, res, next) {
  res.render('portfolio/be-a-character', { title: 'Be-A-Character' });
});
router.get('/portfolio/bridgewater', function(req, res, next) {
  res.render('portfolio/bridgewater', { title: 'Bridgewater' });
});
router.get('/portfolio/national-hamburger-month', function(req, res, next) {
  res.render('portfolio/national-hamburger-month', { title: 'National Hamburger Month' });
});
router.get('/portfolio/zimmerman-blog', function(req, res, next) {
  res.render('portfolio/zimmerman-blog', { title: 'Zimmerman Blog' });
});
router.get('/portfolio/bikestreet', function(req, res, next) {
  res.render('portfolio/bikestreet', { title: 'Bikestreet' });
});
router.get('/portfolio/hottest-halloween', function(req, res, next) {
  res.render('portfolio/hottest-halloween', { title: 'Hottest Halloween' });
});

module.exports = router;
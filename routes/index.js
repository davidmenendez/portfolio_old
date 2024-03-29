var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Front-End Web Developer',
    description: 'Portfolio for Austin based Front-End Web Developer David Menendez. Experienced with HTML5, CSS3, & JavaScript',
    path: req.path
  });
});
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', {
    title: 'Portfolio',
    description: 'Portfolio of David Menendez. Includes work with IBM, American Cancer Society, and PartyCity using technology ranging from PHP to jQuery',
    path: req.path
  });
});
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About',
    description: 'Front-End Web Developer, Musician, and Austin local. Check out my resume and learn a little something about David Menendez',
    path: req.path
  });
});

//Portfolio Entries
router.get('/portfolio/ibm', function(req, res, next) {
  res.render('portfolio/ibm', {
    title: 'IBM',
    description: 'Role of lead Front-End Web Developer using responsive design, jQuery, and CMS templating',
    path: req.path
  });
});
router.get('/portfolio/2k12cr', function(req, res, next) {
  res.render('portfolio/2k12cr', {
    title: '2K12CR',
    description: 'Role of lead Front-End Web Developer using responsive design, jQuery, and CMS templating',
    path: req.path
  });
});
router.get('/portfolio/gotem', function(req, res, next) {
  res.render('portfolio/gotem', {
    title: 'GOTEM',
    description: 'Role of lead Front-End Web Developer using responsive design, jQuery, and CMS templating',
    path: req.path
  });
});
router.get('/portfolio/hadassah', function(req, res, next) {
  res.render('portfolio/hadassah', {
    title: 'Hadassah',
    description: 'Role of lead Front-End Web Developer using responsive design, jQuery, and CMS templating',
    path: req.path
  });
});
router.get('/portfolio/colorado-childrens-hospital', function(req, res, next) {
  res.render('portfolio/colorado-childrens-hospital', {
    title: 'Colorado Childrens Hospital',
    description: 'Front-End web development by David Menendez with Bootstrap, jQuery, Photoshop, and responsive design',
    path: req.path
  });
});
router.get('/portfolio/blackbaud', function(req, res, next) {
  res.render('portfolio/blackbaud', {
    title: 'Blackbaud',
    description: 'Some of the smaller projects I completed while working at Blackbaud with clients including ACS, CDA, HOPE, and Make a Wish foundation',
    path: req.path
  });
});
router.get('/portfolio/be-a-character', function(req, res, next) {
  res.render('portfolio/be-a-character', {
    title: 'Be-A-Character',
    description: 'The Be-A-Character promotion by PartyCity. Role- Front-End Web Developer utalizing jQuery, Bootstrap, Photoshop, and ASP.NET MVC3',
    path: req.path
  });
});
router.get('/portfolio/bridgewater', function(req, res, next) {
  res.render('portfolio/bridgewater', {
    title: 'Bridgewater',
    description: 'Bridgewater project by Lennar. Role- Lead Web Developer utalizing jQuery, Bootstrap, Photoshop, and ASP.NET MVC3',
    path: req.path
  });
});
router.get('/portfolio/national-hamburger-month', function(req, res, next) {
  res.render('portfolio/national-hamburger-month', {
    title: 'National Hamburger Month',
    description: 'National Hamburger Month project by WhiteCastle. Role- Lead Web Developer utalizing jQuery, Responsive Design, HTML5, and ASP.NET MVC3',
    path: req.path
  });
});
router.get('/portfolio/zimmerman-blog', function(req, res, next) {
  res.render('portfolio/zimmerman-blog', {
    title: 'Zimmerman Blog',
    description: 'zBlog project by Zimmerman Advertising. Role- Lead Web Developer utalizing PHP, Wordpress, and CSS3',
    path: req.path
  });
});
router.get('/portfolio/bikestreet', function(req, res, next) {
  res.render('portfolio/bikestreet', {
    title: 'Bikestreet USA',
    description: 'Bikestreet USA project. Role- Front-End Web Developer utalizing Kentico CMS, jQuery, responsive design, CSS3, and HTML5',
    path: req.path
  });
});
router.get('/portfolio/hottest-halloween', function(req, res, next) {
  res.render('portfolio/hottest-halloween', {
    title: 'Hottest Halloween',
    description: 'Hottest Halloween project by PartyCity. Role- Front-End Web Developer utalizing bootstrap, responsive design, MVC3, and Photoshop',
    path: req.path
  });
});

//404
router.get('*', function(req, res, next){
  res.status(404);
  res.render('404', {
    title: '404',
    description: '404',
    path: req.path
  });
});

module.exports = router;
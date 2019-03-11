
var express = require('express');
var router = express.Router();



// define the home page route
router.get('/', function(req, res) {
    res.render('accueil');
});

router.get('/eleves', function(req, res) {
    res.render('eleves');
});

router.get('/notes', function(req,res) {
    res.render('notes');
});

module.exports = router;

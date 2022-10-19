const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ps3', { title: 'PS3' });
});

router.get('/fixedString', function(req, res, next) {
    res.render('fixedString', { title:'part b', name: 'FIXED STRING' });
});

router.post('/postString', function(req, res, next) {
    res.render('postString', { title:'part c', res: req.body });
})

router.get('/postString', function(req, res, next) {
    res.render('postString', { title:'part c', res: req.body });
});

router.get('/data/:name', function(req, res, next) {
    res.render('data', { title: 'part d', name: req.params.name });
});


module.exports = router;

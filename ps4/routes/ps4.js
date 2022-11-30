// Author: Huy Phan
// Assignment: PS4

const express = require('express');
const router = express.Router();
require('dotenv').config();
const token = process.env.WEATHER_TOKEN;
const boston_weather = process.env.BOSTON_WEATHER_URL;
const base_url = process.env.BASE_WEATHER_URL;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('ps4', {title: 'PS4'});
});

/* Part B - uses request to get Boston's weather forecast */
const request = require('request');
const options = {
    'method': 'POST',
    'url': boston_weather,
    'headers': {
        'Authorization': 'Bearer ' + token
    }
};

router.get('/weather', function (req, res, next) {
    return new Promise((resolve, reject) => {
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(JSON.parse(response.body));
            resolve(JSON.parse(response.body));
        });
    })
        .then(
            response => {
                res.send(response)
            }
        )
})

/* Part C - uses async/await + node-fetch to get weather forecast */
router.get('/weather-fetch', async function (req, res, next) {
    const response = await fetch(boston_weather)
    const data = await response.json()
    res.send(data)
})

/* Part D - uses request and a callback to get weather forecast */
router.get('/weather-callback', function (req, res, next) {
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(JSON.parse(response.body));

        res.send(JSON.parse(response.body));
    });
})

/* Part E - renders the result of the api call on the front end */
router.get('/weather-result', async function (req, res, next) {
    const response = await fetch(boston_weather)
    const data = await response.json()

    res.render('ps4', {title: 'Weather Forecast Rendered In Front End', data: JSON.stringify(data, null, 2)});
})

/* Part F - An HTML form to send a search string into your route */

router.get('/search', function (req, res, next) {
    res.render('ps4', {title: 'Search'});
})

router.post('/weather-form', async function (req, res, next) {
    const coordinate = req.body.search;
    const url = base_url + coordinate;
    console.log(url)

    let wx = await fetch(url)
    let data = await wx.json()
    // res.send(data)
    res.render('ps4', {title: 'Wind Speed', data: data[0].wspd});
})


module.exports = router;
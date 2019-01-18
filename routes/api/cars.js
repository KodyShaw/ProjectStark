const router = require("express").Router();
const API = require('../utils/axios-api');
const Instance = require('../utils/axios-instance');
const axios = require('axios');
const util = require('util');

router.get('/locations', (request, response) => {
    const reqQuery = request.query;
    console.log(reqQuery);



    if (reqQuery.zip) {
        //search code for zipcode
        Instance.marketCheckSearch.get('', {
            params: {
                zip: reqQuery.zip
            }
        }).then(res => {

            console.log(zipcode);

            const cars = res.data.listings

            console.log(`Length of cars: ${cars.length}`);

            let marketcheckData = [];

            for (let i = 0; i < cars.length; i++) {
                marketcheckData.unshift({

                    'name': cars[i].heading,
                    'price': cars[i].price,
                    'miles': cars[i].miles,
                    'msrp': cars[i].msrp,
                    'used': usedCheck(cars[i].inventory_type),
                    'media': cars[i].media,
                    'dealer': cars[i].dealer,
                    'build': cars[i].build

                })
            }

            // console.log(marketcheckData[0]);

            function usedCheck(cars) {
                if (cars === 'used') {
                    return true;
                } else {
                    return false;
                }
            }


            response.json(marketcheckData);
        }).catch(err => {
            console.log("Back-end API Call Error");
            if (!err.response) {
                console.log(err);
            } else {
                console.log(`Status code: ${err.response.status}`);
                console.log(`API Message: ${err.response.message}`);
            }
        });

    } if (reqQuery.lat & reqQuery.long) {
        //searchcode for lat & long
        Instance.marketCheckSearch.get('', {
            params: {
                latitude: reqQuery.lat,
                longitude: reqQuery.long,
            }
        }).then(res => {

            console.log(res.request._redirectable._options.path);

            const cars = res.data.listings

            console.log(`Length of cars: ${cars.length}`);

            let marketcheckData = [];

            for (let i = 0; i < cars.length; i++) {
                marketcheckData.unshift({

                    'name': cars[i].heading,
                    'price': cars[i].price,
                    'miles': cars[i].miles,
                    'msrp': cars[i].msrp,
                    'used': usedCheck(cars[i].inventory_type),
                    'media': cars[i].media,
                    'dealer': cars[i].dealer,
                    'build': cars[i].build

                })
            }

            // console.log(marketcheckData[0]);

            function usedCheck(cars) {
                if (cars === 'used') {
                    return true;
                } else {
                    return false;
                }
            }

            response.json(marketcheckData);
        }).catch(err => {
            console.log("Back-end API Call Error");
            if (!err.response) {
                console.log(err);
            } else {
                console.log(`Status code: ${err.response.status}`);
                console.log(`API Message: ${err.response.message}`);
            }
        });
    } if (reqQuery.lat & reqQuery.long & reqQuery.used) {
        function usedCheckReverse(cars) {
            if (cars === true) {
                return 'used'
            } else {
                return 'new'
            }
        }
        Instance.marketCheckSearch.get('', {
            params: {
                latitude: reqQuery.lat,
                longitude: reqQuery.long,
                car_type: usedCheckReverse(reqQuery.used),
            }
        }).then(res => {

            console.log(res.request._redirectable._options.path);

            const cars = res.data.listings

            console.log(`Length of cars: ${cars.length}`);

            let marketcheckData = [];

            for (let i = 0; i < cars.length; i++) {
                marketcheckData.unshift({

                    'name': cars[i].heading,
                    'price': cars[i].price,
                    'miles': cars[i].miles,
                    'msrp': cars[i].msrp,
                    'used': usedCheck(cars[i].inventory_type),
                    'media': cars[i].media,
                    'dealer': cars[i].dealer,
                    'build': cars[i].build

                })
            }

            // console.log(marketcheckData[0]);

            function usedCheck(cars) {
                if (cars === 'used') {
                    return true;
                } else {
                    return false;
                }
            }

            response.json(marketcheckData);
        }).catch(err => {
            console.log("Back-end API Call Error");
            if (!err.response) {
                console.log(err);
            } else {
                console.log(`Status code: ${err.response.status}`);
                console.log(`API Message: ${err.response.message}`);
            }
        });
    }
});

module.exports = router;
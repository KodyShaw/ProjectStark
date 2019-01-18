const router = require("express").Router();
const API = require('../utils/axios-api');
const Instance = require('../utils/axios-instance');
const axios = require('axios');

//in the case where a route will have the longest route then the longest if staement check muct come first followed by the shortest under it.
//look at lat and long for examples

router.get('/locations', (request, response) => {
    const reqQuery = request.query;
    console.log(reqQuery);

    //lat/long --done
    //lat/long/used --done 
    //lat/long/make --work
    //

    if (reqQuery.zip) {
        //if zip exists run this
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

    } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.make) {
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
                make: reqQuery.make
            }
        }).then(res => {

            console.log(res.request._redirectable._options.path);

            const cars = res.data.listings

            console.log(`Length of cars: ${cars.length}`);

            let marketcheckData = [];

            //parseing for loop
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
    } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used) {
        // if lat and long and used exist then run this
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

            //parseing for loop
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

    } else if (reqQuery.lat && reqQuery.long) {
        //else if only lat and long exist then run this
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

            //parseing for loop
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
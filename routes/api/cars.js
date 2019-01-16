const router = require("express").Router();
const API = require('../utils/axios-api');
const Instance = require('../utils/axios-instance');
const axios = require('axios');
const util = require('util');

router.get('/locations', (request, response) => {
    const reqQuery = request.query;
    console.log(reqQuery);

    if (reqQuery.zip) {

        const zipcode = reqQuery.zip

        Instance.marketCheckSearch.get('', {
            params: {
                zip: zipcode
            }
        }).then(res => {
    
            console.log(zipcode);

            console.log(res.config.url);

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

    

    

    // API.axiosGet(Instance.marketCheckSearch, `zip=${zipcode}&radius=200&car_type=used&start=0&rows=50&sort_order=asc`, (res) => {
    //     console.log(
    //         `Backend response: ${res}`);
    //     response.send({ res });
    // })


});

module.exports = router;
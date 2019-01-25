const router = require("express").Router();
const API = require('../utils/axios-api');
const Instance = require('../utils/axios-instance');
const axios = require('axios');

router.get('/locations', (request, response) => {
    const reqQuery = request.query;
    console.log(reqQuery);
    
    if ((reqQuery.lat && reqQuery.long)) {
        console.log(reqQuery.used);
        if (reqQuery.used === undefined) {
            // No Used
            if (reqQuery.radius === undefined) {
                /// No Radius
                if (reqQuery.model === undefined) {
                    //// No Model
                    if (reqQuery.make === undefined) {
                        ///// No Make
                        if (reqQuery.year === undefined) {
                            ////// No Year
    
                            //lat/long
    
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
                                    console.log(err.response.data)
                                }
                            });
                        } else {
                            ////// Year
    
                            ///lat/long/year
    
                            Instance.marketCheckSearch.get('', {
                                params: {
                                    latitude: reqQuery.lat,
                                    longitude: reqQuery.long,
                                    year: reqQuery.year
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
                    } else {
                        ///// Make
                        if (reqQuery.year === undefined) {
                            /////- No Year
    
                            //lat/long/make
    
                            Instance.marketCheckSearch.get('', {
                                params: {
                                    latitude: reqQuery.lat,
                                    longitude: reqQuery.long,
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
                        } else {
                            /////- Year
    
                            //lat/long/make/year
    
                            Instance.marketCheckSearch.get('', {
                                params: {
                                    latitude: reqQuery.lat,
                                    longitude: reqQuery.long,
                                    year: reqQuery.year,
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
                        }
                    }
                } else {
                    //// Model
                    if (reqQuery.year === undefined) {
                        ////- No Year
                        if (reqQuery.make === undefined) {
                            ////-- No Make
    
                            //lat/long/model
    
                            Instance.marketCheckSearch.get('', {
                                params: {
                                    latitude: reqQuery.lat,
                                    longitude: reqQuery.long,
                                    model: reqQuery.model
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
                        } else {
                            ////-- Make
    
                            //lat/long/model/make
    
                            Instance.marketCheckSearch.get('', {
                                params: {
                                    latitude: reqQuery.lat,
                                    longitude: reqQuery.long,
                                    model: reqQuery.model,
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
                        }
                    } else {
                        ////- Year
    
                        //lat/long/model/year
    
                        Instance.marketCheckSearch.get('', {
                            params: {
                                latitude: reqQuery.lat,
                                longitude: reqQuery.long,
                                model: reqQuery.model,
                                year: reqQuery.year
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
                }
            } else {
                /// Radius
                if (reqQuery.year === undefined) {
                    ///- No Year
                    if (reqQuery.make === undefined) {
                        ///-- No Make
                        if (reqQuery.model === undefined) {
                            ///--- No Model
    
                            //lat/long/radius
    
                            Instance.marketCheckSearch.get('', {
                                params: {
                                    latitude: reqQuery.lat,
                                    longitude: reqQuery.long,
                                    radius: reqQuery.radius
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
                        } else {
                            ///--- Model
    
                            //lat/long/radius/model
    
                            Instance.marketCheckSearch.get('', {
                                params: {
                                    latitude: reqQuery.lat,
                                    longitude: reqQuery.long,
                                    radius: reqQuery.radius,
                                    model: reqQuery.model
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
                    } else {
                        ///-- Make
                        if (reqQuery.model === undefined) {
                            ///--= No Model
    
                            //lat/long/radius/make
    
                            Instance.marketCheckSearch.get('', {
                                params: {
                                    latitude: reqQuery.lat,
                                    longitude: reqQuery.long,
                                    radius: reqQuery.radius,
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
                        } else {
                            ///--= Model
    
                            //lat/long/radius/model/make 
    
                            Instance.marketCheckSearch.get('', {
                                params: {
                                    latitude: reqQuery.lat,
                                    longitude: reqQuery.long,
                                    radius: reqQuery.radius,
                                    make: reqQuery.make,
                                    model: reqQuery.model
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
                    }
                } else {
                    ///- Year
                    if (reqQuery.year === undefined) {
                        ///-= No Model
                        if (reqQuery.make === undefined) {
                            ///-== No Make
    
                            //lat/long/radius/year
    
                            Instance.marketCheckSearch.get('', {
                                params: {
                                    latitude: reqQuery.lat,
                                    longitude: reqQuery.long,
                                    radius: reqQuery.radius,
                                    year: reqQuery.year
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
                        } else {
                            ///-== Make
    
                            //lat/long/radius/make/year
    
                            Instance.marketCheckSearch.get('', {
                                params: {
                                    latitude: reqQuery.lat,
                                    longitude: reqQuery.long,
                                    radius: reqQuery.radius,
                                    make: reqQuery.make,
                                    year: reqQuery.year
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
                    }
                    else {
                        ///-= Model
    
                        //lat/long/radius/model/year
    
                        Instance.marketCheckSearch.get('', {
                            params: {
                                latitude: reqQuery.lat,
                                longitude: reqQuery.long,
                                radius: reqQuery.radius,
                                model: reqQuery.model,
                                year: reqQuery.year
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
                }
            }
        } else {
            //Used
            //Check to see if used is true or false
            if (reqQuery.used === 'true' || 'false') {
                if (reqQuery.radius === undefined) {
                    //. No Radius
                    if (reqQuery.model === undefined) {
                        //.. No Model
                        if (reqQuery.make === undefined) {
                            //... No Make
                            if (reqQuery.year === undefined) {
                                //.... No Year
    
                                //lat/long/used
    
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
    
                                    usedCheck(cars);
    
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
                            } else {
                                //.... Year
    
                                //lat/long/used/year
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        year: reqQuery.year
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
    
                                    usedCheck(cars);
    
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
                        } else {
                            //... Make
                            if (reqQuery.year === undefined) {
                                //...- No Year
    
                                //lat/long/used/make
    
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
    
                                    usedCheck(cars);
    
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
                            } else {
                                //...- Year
    
                                //lat/long/used/make/year
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        year: reqQuery.year,
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
    
                                    usedCheck(cars);
    
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
                        }
                    } else {
                        //.. Model
                        if (reqQuery.year === undefined) {
                            //..- No Year
                            if (reqQuery.make === undefined) {
                                //..-- No Make
    
                                //lat/long/used/model
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        model: reqQuery.model
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
    
                                    usedCheck(cars);
    
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
                            } else {
                                //..-- Make
    
                                //lat/long/used/model/make
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        model: reqQuery.model,
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
    
                                    usedCheck(cars);
    
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
                        } else {
                            //..- Year
                            if (reqQuery.make === undefined) {
                                //..-= No make
    
                                //lat/long/used/model/year
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        model: reqQuery.model,
                                        year: reqQuery.year
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
    
                                    usedCheck(cars);
    
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
                            } else {
                                //..-= Make
    
                                //lat/long/used/make/model/year
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        model: reqQuery.model,
                                        make: reqQuery.make,
                                        year: reqQuery.year
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
    
                                    usedCheck(cars);
    
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
                        }
                    }
                } else {
                    //. Radius
                    if (reqQuery.model === undefined) {
                        //.- No Model
                        if (reqQuery.make === undefined) {
                            //.-- No Make
                            if (reqQuery.year === undefined) {
                                //.--= No Year
    
                                //lat/long/used/radius
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        radius: reqQuery.radius
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
    
                                    usedCheck(cars);
    
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
                            } else {
                                //.--= Year
    
                                //lat/long/used/radius/year
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        radius: reqQuery.radius,
                                        year: reqQuery.year
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
    
                                    usedCheck(cars);
    
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
                        } else {
                            //.-- Make
                            if (reqQuery.year === undefined) {
                                //.--; No Year
    
                                //lat/long/used/radius/make
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        radius: reqQuery.radius,
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
    
                                    usedCheck(cars);
    
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
                            } else {
                                //.--; Year
    
                                //lat/long/used/radius/make/year
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        radius: reqQuery.radius,
                                        year: reqQuery.year,
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
    
                                    usedCheck(cars);
    
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
                        }
                    } else {
                        //.- Model
                        if (reqQuery.make === undefined) {
                            //.-= No Make
                            if (reqQuery.year === undefined) {
                                //.-== No Year
    
                                //lat/long/used/radius/model
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        radius: reqQuery.radius,
                                        model: reqQuery.model
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
    
                                    usedCheck(cars);
    
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
                            } else {
                                //.-== Year
    
                                //lat/long/used/radius/model/year
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        radius: reqQuery.radius,
                                        year: reqQuery.year,
                                        model: reqQuery.model
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
    
                                    usedCheck(cars);
    
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
                        } else {
                            //.-= Make
                            if (reqQuery.year === undefined) {
                                //.=; No Year
    
                                //lat/long/used/radius/model/make
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        radius: reqQuery.radius,
                                        make: reqQuery.make,
                                        model: reqQuery.model
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
    
                                    usedCheck(cars);
    
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
                            } else {
                                //.=; Year
    
                                //lat/long/used/radius/make/model/year
    
                                Instance.marketCheckSearch.get('', {
                                    params: {
                                        latitude: reqQuery.lat,
                                        longitude: reqQuery.long,
                                        car_type: usedCheckReverse(reqQuery.used),
                                        radius: reqQuery.radius,
                                        make: reqQuery.make,
                                        model: reqQuery.model,
                                        year: reqQuery.year
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
    
                                    usedCheck(cars);
    
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
                        }
                    }
                }
            } else {
                //code error message saying used must be true or false
            }
        }
    } else if (reqQuery.lat) {
        //code error message saying there must be both lat and long.
    } else if (reqQuery.long) {
        //code error message saying there must be both lat and long.
    }
    //remember to test /lat/long/used
    
    function usedCheckReverse(cars) {
        if (cars === true) {
            return 'used'
        } else {
            return 'new'
        }
    }
    
    function usedCheck(cars) {
        if (cars === 'used') {
            return true;
        } else {
            return false;
        }
    }

});

module.exports = router;

function usedCheckReverse(cars) {
    if (cars === true) {
        return 'used'
    } else {
        return 'new'
    }
}

function usedCheck(cars) {
    if (cars === 'used') {
        return true;
    } else {
        return false;
    }
}
//radius after used 

// if (reqQuery.zip) {
//     //if zip exists run this
//     Instance.marketCheckSearch.get('', {
//         params: {
//             zip: reqQuery.zip
//         }
//     }).then(res => {

//         console.log(zipcode);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }


//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });

// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.radius && reqQuery.make && reqQuery.model && reqQuery.year) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             radius: reqQuery.radius,
//             make: reqQuery.make,
//             model: reqQuery.model,
//             year: reqQuery.year
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.radius && reqQuery.make && reqQuery.model) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             radius: reqQuery.radius,
//             make: reqQuery.make,
//             model: reqQuery.model
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.radius && reqQuery.year && reqQuery.model) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             radius: reqQuery.radius,
//             year: reqQuery.year,
//             model: reqQuery.model
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.radius && reqQuery.year && reqQuery.make) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             radius: reqQuery.radius,
//             year: reqQuery.year,
//             make: reqQuery.make
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.model && reqQuery.make && reqQuery.year) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             model: reqQuery.model,
//             make: reqQuery.make,
//             year: reqQuery.year
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.make && reqQuery.year) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             year: reqQuery.year,
//             make: reqQuery.make
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.model && reqQuery.make) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             model: reqQuery.model,
//             make: reqQuery.make
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.model && reqQuery.year) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             model: reqQuery.model,
//             year: reqQuery.year
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.radius && reqQuery.year) {

//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             radius: reqQuery.radius,
//             year: reqQuery.year
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });

// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.radius && reqQuery.make) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             radius: reqQuery.radius,
//             make: reqQuery.make
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.radius && reqQuery.model) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             radius: reqQuery.radius,
//             model: reqQuery.model
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.radius) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             radius: reqQuery.radius
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.model) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             model: reqQuery.model
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.year) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             year: reqQuery.year
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used && reqQuery.make) {
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//             make: reqQuery.make
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.model && reqQuery.year) {
//     //else if only lat and long and model and year exist then run this
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             model: reqQuery.model,
//             year: reqQuery.year
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.model && reqQuery.make) {
//     //else if only lat and long and model and make exist then run this
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             model: reqQuery.model,
//             make: reqQuery.make
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.make && reqQuery.year) {
//     //else if only lat and long and model and make exist then run this
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             year: reqQuery.year,
//             make: reqQuery.make
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.radius && reqQuery.year && reqQuery.model) {
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             radius: reqQuery.radius,
//             model: reqQuery.model,
//             year: reqQuery.year
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.radius && reqQuery.make && reqQuery.year) {
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             radius: reqQuery.radius,
//             make: reqQuery.make,
//             year: reqQuery.year
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.radius && reqQuery.make && reqQuery.model) {
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             radius: reqQuery.radius,
//             make: reqQuery.make,
//             model: reqQuery.model
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.radius && reqQuery.make) {
//     //else if only lat and long and make exist then run this
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             radius: reqQuery.radius,
//             make: reqQuery.make
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.radius && reqQuery.model) {
//     //else if only lat and long and make exist then run this
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             radius: reqQuery.radius,
//             model: reqQuery.model
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.radius && reqQuery.year) {
//     //else if only lat and long and make exist then run this
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             radius: reqQuery.radius,
//             year: reqQuery.year
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.used) {
//     // if lat and long and used exist then run this
//     function usedCheckReverse(cars) {
//         if (cars === true) {
//             return 'used'
//         } else {
//             return 'new'
//         }
//     }
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             car_type: usedCheckReverse(reqQuery.used),
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.model) {
//     //else if only lat and long and model exist then run this
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             model: reqQuery.model
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.year) {
//     //else if only lat and long and model exist then run this
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             year: reqQuery.year
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.make) {
//     //else if only lat and long and make exist then run this
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             make: reqQuery.make
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if ((reqQuery.lat && reqQuery.long) && reqQuery.radius) {
//     //else if only lat and long and make exist then run this
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//             radius: reqQuery.radius
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//         }
//     });
// } else if (reqQuery.lat && reqQuery.long) {
//     Instance.marketCheckSearch.get('', {
//         params: {
//             latitude: reqQuery.lat,
//             longitude: reqQuery.long,
//         }
//     }).then(res => {

//         console.log(res.request._redirectable._options.path);

//         const cars = res.data.listings

//         console.log(`Length of cars: ${cars.length}`);

//         let marketcheckData = [];

//         //parseing for loop
//         for (let i = 0; i < cars.length; i++) {
//             marketcheckData.unshift({

//                 'name': cars[i].heading,
//                 'price': cars[i].price,
//                 'miles': cars[i].miles,
//                 'msrp': cars[i].msrp,
//                 'used': usedCheck(cars[i].inventory_type),
//                 'media': cars[i].media,
//                 'dealer': cars[i].dealer,
//                 'build': cars[i].build

//             })
//         }

//         // console.log(marketcheckData[0]);

//         function usedCheck(cars) {
//             if (cars === 'used') {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         response.json(marketcheckData);
//     }).catch(err => {
//         console.log("Back-end API Call Error");
//         if (!err.response) {
//             console.log(err);
//         } else {
//             console.log(`Status code: ${err.response.status}`);
//             console.log(`API Message: ${err.response.message}`);
//             console.log(err.response.data)
//         }
//     });
// }
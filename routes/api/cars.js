const router = require("express").Router();
const API = require('../utils/axios-api');
const Instance = require('../utils/axios-instance');
const axios = require('axios');

router.get('/locations', (request, response) => {
    const reqQuery = request.query;
    console.log(reqQuery);

    if ((reqQuery.lat && reqQuery.long)) {
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

                                marketcheckParse(cars, marketcheckData);

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

                                marketcheckParse(cars, marketcheckData);

                                // console.log(marketcheckData[0]);

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

                                marketcheckParse(cars, marketcheckData);

                                // console.log(marketcheckData[0]);

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

                                marketcheckParse(cars, marketcheckData);

                                // console.log(marketcheckData[0]);

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
                                marketcheckParse(cars, marketcheckData);

                                // console.log(marketcheckData[0]);

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
                                marketcheckParse(cars, marketcheckData);

                                // console.log(marketcheckData[0]);

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
                            marketcheckParse(cars, marketcheckData);

                            // console.log(marketcheckData[0]);

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

                                marketcheckParse(cars, marketcheckData);

                                // console.log(marketcheckData[0]);

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
                                marketcheckParse(cars, marketcheckData);

                                // console.log(marketcheckData[0]);

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
                                marketcheckParse(cars, marketcheckData);

                                // console.log(marketcheckData[0]);

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
                                marketcheckParse(cars, marketcheckData);

                                // console.log(marketcheckData[0]);

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
                                marketcheckParse(cars, marketcheckData);

                                // console.log(marketcheckData[0]);

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
                                marketcheckParse(cars, marketcheckData);

                                // console.log(marketcheckData[0]);

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
                            marketcheckParse(cars, marketcheckData);

                            // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                                    marketcheckParse(cars, marketcheckData);

                                    // console.log(marketcheckData[0]);

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
                response.statusMessage = 'Used params must be true or false'
                response.status(501).end()
                //code error message saying used must be true or false
            }
        }
    } else if (reqQuery.lat) {
        response.statusMessage = 'Request must include lat and long params'
        response.status(501).end()
        //code error message saying there must be both lat and long.
    } else if (reqQuery.long) {
        response.statusMessage = 'Request must include lat and long params'
        response.status(501).end()
        //code error message saying there must be both lat and long.
    } else {
        response.statusMessage = 'Error: ID:10t. Endpoint doesnt exist'
        response.status(418).end()
    }

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

    function marketcheckParse(cars, marketcheckData) {
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
    }
});

module.exports = router;
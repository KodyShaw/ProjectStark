const router = require("express").Router();
import API from './utils/axios-api';
import Instance from './utils/axios-instance';

router.get('/cars/locations/:zip', (req, res) => {

    const zipcode = req.params.zip;

    console.log(`Zipcode: ${zipcode}`);

    API.axiosGet(Instance.marketCheckSearch, `zip=${zipcode}&radius=200&car_type=used&start=0&rows=50&sort_order=asc`, (req,res) => {
        console.log(
        `Backend response: 
        ${res}`);
    })
});
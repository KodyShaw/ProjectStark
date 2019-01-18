const router = require("express").Router();
const carsRoutes = require("./cars");

router.use('/cars', carsRoutes);

module.exports = router;
const router = require("express").Router();
const carsRoutes = require("./cars");
const usersRoutes = require("./users")

router.use('/cars', carsRoutes);
router.use('/users', usersRoutes)

module.exports = router;
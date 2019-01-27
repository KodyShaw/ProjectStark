const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api/v1", apiRoutes);

router.use("/v1", require("./v1"));

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;


//You can create new routes to our own API here. 
//Look at last weeks react class asignments for examples. 
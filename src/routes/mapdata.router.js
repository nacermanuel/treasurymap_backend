const { Router } = require("express");
const router = Router();
const  getMapData = require("../controllers/map/mapdata.controllers.js");

router.get("/", getMapData);

module.exports = router;
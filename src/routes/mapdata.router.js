const { Router } = require("express");
const router = Router();
const {
  getMapData,
  getMultiplayerMapData,
} = require("../controllers/map/mapdata.controllers.js");

router.get("/", getMapData);
router.get("/multiplayerMap", getMultiplayerMapData);

module.exports = router;

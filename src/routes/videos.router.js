const { Router } = require("express");
const router = Router();
const {
    CreateVideo,
} = require("../controllers/videos.controllers");


router.post("/create", CreateVideo );



module.exports = router;
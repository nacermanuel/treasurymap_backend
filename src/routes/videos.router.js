const { Router } = require("express");
const router = Router();
const {
    CreateVideo,
    GetVideoByCompanyId,
} = require("../controllers/videos.controllers");


router.post("/create", CreateVideo );
router.get("/all/:companyId", GetVideoByCompanyId)



module.exports = router;
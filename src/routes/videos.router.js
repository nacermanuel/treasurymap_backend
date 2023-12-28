const { Router } = require("express");
const router = Router();
const {
    CreateVideo,
    GetVideoByCompanyId,
    DeleteVideo,
} = require("../controllers/videos.controllers");


router.post("/create", CreateVideo );
router.get("/all/:companyId", GetVideoByCompanyId)
router.delete("/:videoid",DeleteVideo)

/*INSERT*/


module.exports = router;
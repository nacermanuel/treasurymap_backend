const { Router } = require("express");
const router = Router();
const {
  CreateVideo,
  GetVideoByCompanyId,
  DeleteVideo,
} = require("../controllers/videos.controllers");

router.post("/create/:companyId", CreateVideo);
router.get("/all/:companyId", GetVideoByCompanyId);
router.delete("/:videoid", DeleteVideo);

module.exports = router;

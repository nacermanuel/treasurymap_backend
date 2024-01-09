const { Router } = require("express");
const router = Router();
const {
  CreateVideo,
  GetVideoByCompanyId,
  DeleteVideo,
  getVideoById,
  updateVideo,
} = require("../controllers/videos.controllers");

router.get("/:videoId", getVideoById);
router.get("/all/:companyId", GetVideoByCompanyId);
router.post("/create/:companyId", CreateVideo);
router.put("/:videoId", updateVideo);
router.delete("/:videoid", DeleteVideo);

module.exports = router;

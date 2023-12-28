const VideosServices = require("../services/videos.services")

const CreateVideo = async (req, res) => {
  
  try{
    const videoData = req.body
    const {title, url, companyId} = videoData
    
    // if (!title || !url || !companyId ) {
    //   return res.status(400).send('Missing mandatory fields');
    // }

    const result = await VideosServices.createVideoService(videoData);

    if (result){
      res.status(201).json(result);  
    }else if(!result){
      res.status(400).json({ message: "Not created. Controller response" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }



}

module.exports = {
  CreateVideo,
}
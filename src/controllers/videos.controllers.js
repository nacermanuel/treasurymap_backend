const VideosServices = require("../services/videos.services")

const CreateVideo = async (req, res) => {
  
  try{
    const videoData = req.body
    const {title, url, companyId} = videoData
  
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


const GetVideoByCompanyId = async (req, res) => {
  
  try{
    const { companyId } = req.params
    
    const result = await VideosServices.GetVideoByCompanyIdService(companyId);

    if (result){
      res.status(200).json(result);  
    }else if(!result){
      res.status(400).json({ message: "Error Controller response" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }

}

const DeleteVideo = async (req, res) => {
  
  try{
    const { videoid } = req.params
    
    const result = await VideosServices.DeleteVideoService(videoid);

    if (result){
      res.status(200).json(result);  
    }else if(!result){
      res.status(400).json({ message: "Video does not exist. Controller response" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }

}


module.exports = {
  CreateVideo,
  GetVideoByCompanyId,
  DeleteVideo
}
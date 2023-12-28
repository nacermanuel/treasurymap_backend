const Videos = require("../models/videos.models");

class VideosServices {

  static async createVideoService(videoData) {
    const {title, url, companyId} = videoData
    try{
      const video = await Videos.create(
        {
          title: title,
          url: url,
          companyId: companyId
        }
      )
      if(video){
        return video
      } else{
        return false
      }
    } catch(error){
      throw error;
    }
  }
    
} 

module.exports = VideosServices;
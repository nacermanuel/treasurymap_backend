const ArticlesServices = require("../services/articles.services")

const CreateArticle = async (req, res) => {
  
  try{
    const articleData = req.body
    
    const result = await ArticlesServices.createArticleService(articleData);

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


const GetArticleByCompanyId = async (req, res) => {
  
  try{
    const { companyId } = req.params
    
    const result = await ArticlesServices.GetArticleByCompanyIdService(companyId);

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

const DeleteArticle = async (req, res) => {
  
  try{
    const { articleid } = req.params
    
    const result = await ArticlesServices.DeleteArticleService(articleid);

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
  CreateArticle,
  GetArticleByCompanyId,
  DeleteArticle
}
const Articles = require("../models/articles.models");

class ArticlesServices {

  static async createArticleService(articleData) {
    const {title, body, companyId} = articleData
    try{
      const article = await Articles.create(
        {
          title: title,
          body: body,
          companyId: companyId
        }
      )
      if(article){
        return article
      } else{
        return false
      }
    } catch(error){
      throw error;
    }
  }
  
  static async GetArticleByCompanyIdService(companyId) {
    try {
      const ArticlesList = await Articles.findAll({
        where: {
          companyId: companyId
        },
      });
      if (ArticlesList) {
        return ArticlesList
      } else{
        return false
      }
    } catch (error) {
      throw error;
    }    
  }

  static async DeleteArticleService(articleid) {
    try {
      const article = await Articles.destroy({
        where: {
          id: articleid
        },
      });
      if (article) {
        return article
      } else{
        return false
      }
    } catch (error) {
      throw error;
    }    
  }  
  

} 

module.exports = ArticlesServices;
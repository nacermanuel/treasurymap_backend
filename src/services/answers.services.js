const CompaniesAnswers = require("../models/companiesanswers.models");

class AnswersServices {

  static async createAnswerService(answerData) {
    const {answers, companyId, questionId} = answerData
    try{
      const answer = await CompaniesAnswers.create(
        {
          answers: answers,
          companyId: companyId,
          questionId: questionId
        }
      )
      if(answer){
        return answer
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

module.exports = AnswersServices;
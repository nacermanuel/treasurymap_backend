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
  

  static async updateAnswerService(answerId, answers){
    try{
      const answer = await CompaniesAnswers.update(answers, 
        {
          where: {
            id: answerId
          }
        });

      if(answer[0]){
        //console.log('SERVICIO dentro del if true');
        return answer
      } else{
        //console.log('SERVICIO dentro del if false');
        return false
      }      

    }catch(error){
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
  

} 

module.exports = AnswersServices;
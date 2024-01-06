const CompaniesAnswers = require("../models/companiesanswers.models");

class AnswersServices {
  static async createAnswerService(companyId, answerData) {
    try {
      const promises = answerData.map(async (answer, index) => {
        await CompaniesAnswers.create({
          answer,
          companyId,
          questionId: index + 1,
        });
      });
      await Promise.all(promises);
      return { result: true, message: "Respuestas creadas correctamente" };
    } catch (error) {
      throw error;
    }
  }

  static async updateAnswerService(answerId, answers) {
    try {
      const answer = await CompaniesAnswers.update(answers, {
        where: {
          id: answerId,
        },
      });

      if (answer[0]) {
        //console.log('SERVICIO dentro del if true');
        return answer;
      } else {
        //console.log('SERVICIO dentro del if false');
        return false;
      }
    } catch (error) {
      throw error;
    }
  }

  static async GetAnswerByCompanyIdService(companyId) {
    try {
      const answerList = await CompaniesAnswers.findAll({
        where: {
          companyId: companyId,
        },
        attributes: ["answer"],
      });
      return answerList.map((answerObj) => answerObj.answer);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AnswersServices;

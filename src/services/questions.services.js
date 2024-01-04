const Questions = require("../models/questions.models");

class QuestionsServices {
  static async getAllQuestions() {
    try {
      const result = await Questions.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = QuestionsServices;

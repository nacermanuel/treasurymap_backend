const QuestionsServices = require("../services/questions.services");

const getAllQuestions = async (req, res, next) => {
  try {
    const result = await QuestionsServices.getAllQuestions();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllQuestions,
};

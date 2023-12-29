const AnswersServices = require("../services/answers.services")

const CreateAnswer = async (req, res) => {
  
  try{
    const answerData = req.body
    
    const result = await AnswersServices.createAnswerService(answerData);

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

const updateAnswer = async (req, res) => {
  
  try{
    const { answerId } = req.params
    const  answers  = req.body 
    
    const result = await AnswersServices.updateAnswerService(answerId, answers);

    if (result){
      res.status(200).json(result);  
    }else if(!result){
      res.status(400).json({ message: "Not Succesfull. Controller response" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }

}


const GetAnswerByCompanyId = async (req, res) => {
  
  try{
    const { companyId } = req.params
    
    const result = await AnswersServices.GetAnswerByCompanyIdService(companyId);

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




module.exports = {
  CreateAnswer,
  GetAnswerByCompanyId,
  updateAnswer
}
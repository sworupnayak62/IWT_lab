const Question = require("../models/Qstn")
const joi = require("joi")

exports.SaveQuestion = async (req, res) => {
    const QuestionSchema = joi.object({
      SubjectID: joi.string().required(),
      QuestionID: joi.string().required(),
      Question: joi.string().required(),
      Option1: joi.string().required(),
      Option2: joi.string().required(),
      Option3: joi.string().required(),
      Option4: joi.string().required(),
      Answer: joi.string().required()
    })
  
    try {
      const QuestionData = await QuestionSchema.validateAsync(req.body)
    const question = new Question(QuestionData)
    await question.save()
    res.status(201).json({
      message: "Question saved successfully",
      QuestionData: question
    })
    } catch (err) {
      res.status(500).json({
        message: "Something went wrong !!",
        error: err
      })
    }
  }

exports.QuestionList = async (req, res) => {
  try {
    let question = await Question.find()

    if (!question) {
      question = []
    }
    res.status(200).json({
      message: "Question fetched successfully",
      QuestionData: question
    })
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong !!",
      error: err
    })
  }
}


exports.GetQuestionById = async (req, res) => {
  try {

    let question = await Question.find({ SubjectID: req.query.id, QuestionID:  req.query.qid})

    if (!question) {
      question = []
    }
    res.status(200).json({
      message: "Question fetched successfully",
      QuestionData: question
    })
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong !!",
      error: err
    })
  }
}
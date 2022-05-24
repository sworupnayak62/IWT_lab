const mongoose = require("mongoose")

const QuestionSchema = mongoose.Schema({
    SubjectID: {
        type: String,
        required: true
    },
  QuestionID: {
      type: String,
      required: true
  },
  Question: {
    type: String,
    required: true
  },
  Option1: {
    type: String,
    required: true
  },
  Option2: {
    type: String,
    required: true
  },
  Option3: {
    type: String,
    required: true
  },
  Option4: {
    type: String,
    required: true
  },
  Answer: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("question", QuestionSchema)

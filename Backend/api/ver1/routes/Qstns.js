const express = require("express")
const questionController = require("../controller/qstn.controller")
const router = express.Router()


router.post("/save", questionController.SaveQuestion)

router.get("/", questionController.QuestionList)

router.get("/Get/Question", questionController.GetQuestionById)


module.exports = router

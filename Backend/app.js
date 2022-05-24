const express = require("express")
const app = express()
const dbConn = require("./db/db.conn")
const cors = require("cors")

dbConn()
app.use(express.json())

const port = process.env.PORT || 3000

const corsOption={
  "origin":"*"
}
app.use(cors(corsOption))

const questionRoute = require("./api/ver1/routes/Qstns")
app.use("/api/Questions", questionRoute)

const userRoute = require("./api/ver1/routes/Users")
app.use("/api/Users", userRoute)

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})

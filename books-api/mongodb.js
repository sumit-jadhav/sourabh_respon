const express = require("express")
const MongoClient = require("mongodb").MongoClient

const app = express()
app.use(express.json)
var database

app.get("/", (req, resp) => {
  resp.send("welcome to mango db .js")
})
app.listen(8080, () => {
  MongoClient.connect(
    "mongodb://localhost:27017",
    { useNewUrlParser: true },
    (error, result) => {
      if (error) throw error
      database = result.db("mydatabase")
      console.log("connection succesfull")
    }
  )
})

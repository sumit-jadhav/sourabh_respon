const { application } = require("express")
const express = require("express")

const app = express()

app.use(express.json())

const books = [
  { title: "java programing", id: 1 },
  { title: "c++programing lang", id: 2 },
  { title: "nodejs programing", id: 3 },
]

app.get("/", (req, resp) => {
  resp.send("welcome to the book store")
})

app.get("/api/books", (req, resp) => {
  resp.send(books)
})

app.get("/api/books/:id", (req, resp) => {
  const book = books.find((v) => v.id === parseInt(req.params.id))
  if (!book) resp.status(404).send("book with id not found")
  resp.send(book)
})

app.post("/api/books/addBook", (requ, resp) => {
  const book = {
    id: books.length + 1,
    title: requ.body.title,
  }
  books.push(book)
  resp.send(book)
})

app.put("/api/books/:id", (req, resp) => {
  const book = books.find((v) => v.id === parseInt(req.params.id))
  if (!book) resp.status(404).send("book with id not found")
  book.title = req.body.title

  resp.send(book)
})
app.delete("/api/books/:id", (req, resp) => {
  const book = books.find((v) => v.id === parseInt(req.params.id))
  if (!book) resp.status(404).send("book with id not found")
  const index = books.indexOf(books)
  books.splice(index, 1)

  resp.send(book)
})
app.listen(8080)

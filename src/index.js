const express = require('express')

const app = express()
const PORT = 3000
app.use(express.json());
const books = [
    {
      id:1,
      item: 'Bhagavad Gita',
      quantity: 2000
    },
    {
      id:2,
      item: 'Srimad Bhagavatam',
      quantity: 100
    },
    {
      id:3,
      item: 'Science of self realisation',
      quantity: 500
    },
    {
      id:4,
      item: 'Prabhupada Lilamrita',
      quantity: 1000
    }
  ]

  // 1. Get Req: Define your path as specific as possible
app.get('/', (request, response) => {
    console.log(request.query)
    response.send(books)
})

app.post('/', (request, response) => {
    console.log("request.body")
    console.log(request.body)
    books.push(request.body)
    response.send(201)
})

app.listen(PORT, () => console.log(`Running express server on port ${PORT}`))

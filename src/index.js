const express = require('express')
const booksrouter = require('./routes/books')

const app = express()
const PORT = 3000
app.use(express.json());
app.use(express.urlencoded());
app.use('/api',booksrouter)

app.listen(PORT, () => console.log(`Running express server on port ${PORT}`))

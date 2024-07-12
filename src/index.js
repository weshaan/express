const express = require('express')
const booksrouter = require('./routes/books')
const session = require('express-session')

const app = express()
const PORT = 3000
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/v1',booksrouter)
app.use(session({
    secret: 'uwejuewimwniuenownfwonfownwo',
    resave: false,
    saveUninitialized: true,
    }));

app.listen(PORT, () => console.log(`Running express server on port ${PORT}`))

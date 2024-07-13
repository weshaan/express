const express = require('express');
const booksrouter = require('./routes/books');
const session = require('express-session');
const authrouter = require('./routes/auth');
require('./database');

const app = express()
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded());
app.use(session({
    secret: 'uwejuewimwniuenownfwonfownwo',
    resave: false,
    saveUninitialized: true,
    }));


app.use('/api/v1',booksrouter)
app.use('/api/v1',authrouter)

app.listen(PORT, () => console.log(`Running express server on port ${PORT}`))

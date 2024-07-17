// index.js
const express = require('express');
const bodyParser = require('body-parser');
const todosRouter = require('./routes/todos');
require('./database');
const PORT = 3000

const app = express();
app.use(bodyParser.json());

app.use('/todos', todosRouter);

app.listen(PORT, () => console.log(`Running express server on port ${PORT}`))

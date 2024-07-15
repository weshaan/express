// database/todos.js
const dateFns = require('date-fns');

const todos = [
    { 
        id: 1, 
        todo: 'Learn Node JS', 
        category: 'LEARNING', 
        priority: 'HIGH', 
        status: 'IN PROGRESS', 
        dueDate: '2021-03-16' 
    },
    { 
        id: 2, 
        todo: 'Buy a Car', 
        category: 'HOME', 
        priority: 'MEDIUM', 
        status: 'TO DO', 
        dueDate: '2021-09-22' 
    },
    { 
        id: 3, 
        todo: 'Clean the Garden', 
        category: 'HOME', 
        priority: 'LOW', 
        status: 'TO DO', 
        dueDate: '2021-09-22' 
    },
    {
        id: 4, 
        todo: 'Fix the bug', 
        category: 'WORK', 
        priority: 'MEDIUM', 
        status: 'DONE', 
        dueDate: '2021-09-22' 
    }
];

const Date_format = (date) =>{
    return dateFns.format(new Date(date), 'yyyy-MM-dd');
};

const Params = (req, res, next) =>{
    const { status, priority, category, dueDate } = req.body;
    const valid_St = ['TO DO', 'IN PROGRESS', 'DONE'];
    const valid_Pr = ['HIGH', 'MEDIUM', 'LOW'];
    const valid_Cat = ['WORK', 'HOME', 'LEARNING'];

    if (status && !valid_St.includes(status)){
        return res.status(400).send('Invalid Todo Status');
    }
    if (priority && !valid_Pr.includes(priority)){
        return res.status(400).send('Invalid Todo Priority');
    }
    if (category && !valid_Cat.includes(category)){
        return res.status(400).send('Invalid Todo Category');
    }
    if (dueDate && isNaN(Date.parse(dueDate))){
        return res.status(400).send('Invalid Due Date');
    }
    next();
};

module.exports = { todos, Date_format, Params };

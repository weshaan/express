const express = require('express');
const router = express.Router();
const { Date_format, Params, todos } = require('../database/todos');
const Task = require('../database/tasks')

router.get('/', (req, res) =>{
    const { status, priority, category, search_q } = req.query;
    let query_name = todos;

    if (status){
        query_name = query_name.filter(todo => todo.status === status);
    }
    if (priority){
        query_name = query_name.filter(todo => todo.priority === priority);
    }
    if (category){
        query_name = query_name.filter(todo => todo.category === category);
    }
    if (search_q){
        query_name = query_name.filter(todo => todo.todo.includes(search_q));
    }
    
    res.send(query_name);
});

router.get('/:todoId', (req, res) =>{
    const {todoId} = req.params;
    const todo = todos.find(todo => todo.id === parseInt(todoId));
    if (!todo){
        return res.status(404).send('Todo not found');
    }
    res.send(todo);
    });

router.get('/agenda', (req, res) =>{
    const {date} = req.query;
    const formattedDate = Date_format(date);
    const query_name = todos.filter(todo => Date_format(todo.dueDate) === formattedDate);
    res.send(query_name);
});

router.post('/', Params, (req, res) =>{
    const { id, todo, category, priority, status, dueDate } = req.body;
    todos.push({ id, todo, category, priority, status, dueDate: Date_format(dueDate) });
    const task = new Task({id, todo, category, priority, status, dueDate});
        task.save()
        .then(() => {
            res.send('Todo Successfully Added');
        })
    
});

router.put('/:todoId', Params, (req, res) =>{
    const { todoId } = req.params;
    const { todo, category, priority, status, dueDate } = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(todoId));

    if (todoIndex === -1) {
        return res.status(404).send('Todo not found');
    }

    if (todo) todos[todoIndex].todo = todo;
    if (category) todos[todoIndex].category = category;
    if (priority) todos[todoIndex].priority = priority;
    if (status) todos[todoIndex].status = status;
    if (dueDate) todos[todoIndex].dueDate = Date_format(dueDate);

    res.send('Todo Updated');
});

router.delete('/:todoId', (req, res) => {
    const { todoId } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(todoId));

    if (todoIndex === -1) {
        return res.status(404).send('Todo not found');
    }

    todos.splice(todoIndex, 1);
    res.send('Todo Deleted');
});

module.exports = router;

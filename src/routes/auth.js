const {Router} = require('express');
const User = require('../database/schemas/user');

const router = Router();

router.post('/login', (request,response) => {
    const {username,password} = request.body;
    if(username && password){
        if(request.session.user){
            response.send({message:'You are already logged in.'});
        }else{
            request.session.user = {username,password};
            response.send({message:'You are logged in.'});

        }
    }else{
        response.send(401);
    }
})

router.post('/register', (request,response) => {
    const {username,password,email} = request.body;
        const user = new User({username,password,email});
        user.save()
        .then(() => {
            response.send({message:'User created.'});
        })
})

module.exports = router;

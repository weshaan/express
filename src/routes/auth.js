const {Router} = require('express');

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

module.exports = router;

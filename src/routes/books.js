const {Router, response} = require('express');
const session = require('express-session')

const router = Router();
router.use(session({
  secret: 'uwejuewimwniuenownfwonfownwo',
  resave: false,
  saveUninitialized: true,
  }));
  
// router.use((req,res,next) =>{
//     if(req.session.user) next();
//     else {res.send(401);}
// })

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

router.get('/', (request, response) => {
    const {quantity} = request.query;
    const parsedQuantity=parseInt(quantity);
    if(!isNaN(parsedQuantity)){
    console.log(request.query);
    response.send(books.filter(book => book.quantity <= parsedQuantity));
}else{
    console.log(request.query);
    response.send(books);}
})

router.get('/:item',(request,response) => {
  const item = request.params.item
  const book = books.find((book) => book.item === item)
  response.cookie('picked a book',true,{
    maxAge: 10000,
  });
  response.send(book)
  });

router.post('/', (request, response) => {
    console.log("request.body")
    console.log(request.body)
    books.push(request.body)
    response.send(201)
})

router.get('/buy/list',(request,response) => { 
  const {list} = request.session;
  if(!list){
    response.send('Empty list')
  }else{
    response.send(list)
  }
})
router.post('/buy/list',(request,response) => {
  const {item,quantity} = request.body;
  const listitem = {item,quantity};
  const {list} = request.session;
  if(list){
    request.session.list.items.push(listitem);
  }else{
    request.session.list = {items:[listitem]}
  }
  // console.log(listitem);
  // books.push(listitem);
   response.send(201);
})

module.exports = router;

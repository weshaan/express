const {Router} = require('express');

const router = Router();

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
  response.send(book)
  })

router.post('/', (request, response) => {
    console.log("request.body")
    console.log(request.body)
    books.push(request.body)
    response.send(201)
})

module.exports = router;

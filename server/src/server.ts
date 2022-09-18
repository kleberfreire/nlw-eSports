import express from "express";

const port = process.env.PORT || 3333;

const app = express();

app.use(express.json())

app.get('/ads', (request, response) => { 
  response.json([
    { id: 1 , name: 'Anúncio 1'},  
    { id: 2 , name: 'Anúncio 2'},  
    { id: 3 , name: 'Anúncio 3'},  
    { id: 4 , name: 'Anúncio 4'},  
  ])
})


app.listen(port, () => { console.log('listening on port ' + port); });
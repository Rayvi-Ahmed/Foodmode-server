const express = require('express')
const cors= require('cors')

const app = express()
const port= process.env.PORT|| 5000;

app.use(cors())

const Chefs= require('./data/chefs.json')
const recipe=require('./data/recipe.json')


app.get('/',(req,res)=>{
  res.send('khidar z ki jala re boo bhai')
})


app.get('/chefs',(req,res)=>{
res.send(Chefs)
})

app.get('/recipe',(req,res)=>{
res.send(recipe)
})

app.get('/chefs/:id',(req,res)=>{
  const id= req.params.id;
  const item = Chefs?.find(ch=>ch.id==id)
  console.log(item)
  res.send(item)
})
 

app.listen(port,()=>{
    console.log(`foodie recipes is continueing ${port}`)
})
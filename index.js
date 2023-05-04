const express = require('express')
const cors= require('cors')

const app = express()
const port= process.env.PORT|| 5000;

app.use(cors())

const Chefs= require('./data/chefs.json')


app.get('/',(req,res)=>{
  res.send('khidar z ki jala re boo bhai')
})


app.get('/chefs',(req,res)=>{
res.send(Chefs)
})
app.get('/chefs/:recipe',(req,res)=>{
  const id= req.params.id;
console.log(id)
})


app.listen(port,()=>{
    console.log(`foodie recipes is continueing ${port}`)
})
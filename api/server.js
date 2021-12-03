const express = require('express')
const app = express()
const port = 3001

const {Sauveteur, Sauve, Evenement,Utilisateur} = require('./bddConnection')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/sauveteurs',async (req,res)=>{
    s = new Sauveteur
    var [ret, meta] = await s.findAll()
    res.send(ret)
})
app.get('/sauves',async (req,res)=>{
    s = new Sauve
    var [ret, meta] = await s.findAll()
    res.send(ret)
})

app.listen(port, async () => {    
  console.log(`Example app listening at http://localhost:${port}`)
})


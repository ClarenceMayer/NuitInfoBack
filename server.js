const express = require('express')
const app = express()
const port = 3001

const {Sauveteur, Sauve, Evenement} = require('./bddConnection')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
    var s = new Sauveteur
    var [res,meta] = await s.findByName("Romain mas")
    console.log(res)
    
      
  console.log(`Example app listening at http://localhost:${port}`)
})


const express = require('express')
const path = require('path')
const DataStore = require('nedb')

const app = express()
const dataBase = new DataStore('dataBase.db')
dataBase.loadDatabase()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json({limit: '1mb'}))


app.post('/send', (req, res) => {
   console.log(req.body);

   dataBase.insert(req.body)
   res.json({
      status: 'succsess'
   })
})

app.get('/api', (req, res) => {
   dataBase.find({}, (err, data) => {
      if(err){
         res.end()
         return
      }

      res.json(data[Math.floor(Math.random() * data.length)])
   })
})


app.listen(8080)



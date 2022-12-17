const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello Ryan')
})

app.get('/name', (req, res) => {
  console.log({urlParam: req.query})
  res.send('Send Success!')
})

app.post('/login', (req, res) => {
  console.log({requestFromOutSide: req.body})
  res.send('Login Successfully!')
})

app.put('/email', (req, res) => {
  console.log({updateData: req.body})
  res.send('Update Success!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Ryan')
})

app.post('/login', (req, res) => {
  console.log({requestFromOutSide: req})
  res.send('Login Successfully!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
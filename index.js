const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (error, result) => {
    // console.log(result)
    // res.send(result)
    response(200, result, "Get all data from users", res)
  })
})

app.get('/users', (req, res) => {
  console.log({findId: req.query.id})
  const sql = `SELECT name FROM users WHERE id = ${req.query.id}`
  db.query(sql, (error, result) => {
    response(200, result, "Show users from id", res)
  })
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
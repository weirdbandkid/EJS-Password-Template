const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Welcome! This template will be finshied sometime ')
})

app.listen(3000)

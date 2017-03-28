const express = require('express')
const app = express()
const path = require('path')
const port = 8080

app.use(express.static('public'))

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, function () {
  console.log('Express Test is running on 8080')
})

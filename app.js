const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.listen(3000, function () {
  console.log('Your server is running on localhost3000')
})
app.use(express.static('public'))

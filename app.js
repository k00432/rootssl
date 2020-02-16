const https = require('https')
const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

const options = {
    key: fs.readFileSync('key/server.key'),
    cert: fs.readFileSync('key/server.crt')
};

app.get('/', (req, res) => res.send('Hello World!'))

https.createServer(options, app)
  .listen(port, function () {
    console.log(`Example app listening on port ${port}! Go to https://localhost:${port}/`)
  })
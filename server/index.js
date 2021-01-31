const path = require('path')
const express = require('express')
const app = express()
const morgan = require ('morgan')
const bodyParser = require('body-parser')

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

// api
app.use('/api', require('./api'))

// sends index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// handle 500 errors
app.use(function (err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err || 500).send(err.message || 'Internal server error.')
})

// start server
const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('3...')
  console.log('2...')
  console.log('1...')
  console.log(`Blasting off on port ${port}`)
})

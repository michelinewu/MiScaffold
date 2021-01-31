const router = require('express').Router()

router.use('/weather', require('./weather'))

router.use(function (req,res,next) {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

module.exports = router

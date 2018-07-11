var express = require('express')
var router = express.Router()

// 定义路由
router.get('/', function (req, res) {
  res.send('Birds home page')
})

module.exports = router;
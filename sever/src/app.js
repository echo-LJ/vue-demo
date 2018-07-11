const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `${req.body.email}! hello fun!`
  })
})
// 环境变量设置了prot就用环境变量的port,否则就用8081
app.listen(process.env.PORT || 8081)

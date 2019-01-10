const path = require('path')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const uuidv4 = require('uuid/v4')

const commandMap = {}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const web3 = (method) => (...params) => (cb) => {
  const id = uuidv4()
  commandMap[id] = cb
  io.emit(method.endsWith('()') ? 'function' : 'statement', {
    id,
    method: `web3.${method}`,
    params
  })
}

io.on('connection', function (socket) {
  console.log('Bridge is active')

  socket.on('result', function ({ id, error, result }) {
    const cb = commandMap[id]
    cb(error, result)
    delete commandMap[id]
  })

  web3('eth.getBlock()')(1)((err, block) => {
    console.log('web3.eth.getBlock(1)', err, block)
  })

  web3('eth.accounts')()((err, accounts) => {
    console.log('eth.accounts', err, accounts)
  })
})

http.listen(4000, function () {
  console.log('Listening on 4000')
})

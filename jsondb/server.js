const path = require('path')
const jwt = require('jsonwebtoken')
const jsonServer = require('json-server')
const database = require(path.join(__dirname, 'db.js'))()
const server = jsonServer.create()
const router = jsonServer.router(database)
const middlewares = jsonServer.defaults()

const tokens = {}
const tokenSecret = 'secret'
const refreshTokenSecret = 'secret2'

const port = 3333
server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/auth/refresh/', (req, resp) => {
  const { refreshToken } = req.body
  if (refreshToken in tokens) {
    const data = jwt.verify(refreshToken, refreshTokenSecret)
    if (data) {
      const token = jwt.sign({ id: data.id }, tokenSecret, {
        expiresIn: '900s',
      })
      tokens[refreshToken] = token
      resp.jsonp({ token })
    }
  } else {
    resp.status(404).send()
  }
})

server.post('/auth/userLogin/', (req, resp) => {
  const { username, password } = req.body
  const user = database.users.find(
    (user) => user.username === username && user.password === password
  )
  if (user) {
    const token = jwt.sign({ id: user.id }, tokenSecret, { expiresIn: '900s' })
    const refreshToken = jwt.sign({ id: user.id }, refreshTokenSecret, {
      expiresIn: '86400s',
    })
    tokens[refreshToken] = token
    resp.status(200).jsonp({ token, refreshToken })
  } else {
    resp.status(404).send()
  }
})

// verify authentication
server.use((req, resp, next) => {
  const closed = ['users', 'profiles', 'systems', 'modules']
  const path = req.path.replace(/\//g, '')
  if (closed.includes(path)) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      jwt.verify(token, tokenSecret)
    } catch (err) {
      resp.status(401).send()
    }
  }
  next()
})

server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`)
})

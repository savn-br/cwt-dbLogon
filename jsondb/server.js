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

server.post('/access/:userId', (req, resp) => {
  const { userId } = req.params
  console.log(`user ${userId} request access`)
  resp.status(200).jsonp({})
})
server.put('/access/:userId', (req, resp) => {
  const { userId } = req.params
  const data = req.body
  try {
    const user = database.access.find(
      (user) => user.userId === parseInt(userId)
    )
    resp.status(200).jsonp({ ...user, ...data })
  } catch (err) {
    resp.status(404).send()
  }
})
server.put('/myProfile/:userId', (req, resp) => {
  const { userId } = req.params
  const data = req.body
  try {
    const user = database.myProfile.find(
      (user) => user.userId === parseInt(userId)
    )
    resp.status(200).jsonp({ ...user, ...data })
  } catch (err) {
    resp.status(404).send()
  }
})

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
    resp.status(200).jsonp({
      token,
      refreshToken,
      userId: user.id,
      profileType: user.profileType,
    })
  } else {
    resp.status(404).send()
  }
})

// verify authentication
server.use((req, resp, next) => {
  const closed = ['access', 'myProfile']
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

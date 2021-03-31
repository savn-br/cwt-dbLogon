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
  try {
    const { userId } = req.params
    const ID = parseInt(userId)
    database.users[ID - 1].profileType = 'pending'
    database.access[ID - 1].data.profileType = 'pending'
    resp.status(200).jsonp(database.access[ID - 1])
  } catch (err) {
    resp.status(404).send()
  }
})
server.put('/access/:userId', (req, resp) => {
  const { userId } = req.params
  const data = req.body
  try {
    const ID = parseInt(userId)
    if (data.profileType === 'new') {
      data.profileType = 'saved'
    }
    database.access[ID - 1].data = { ...database.access[ID - 1].data, ...data }
    database.users[ID - 1] = { ...database.users[ID - 1], ...data }
    resp.status(200).jsonp(database.access[ID - 1])
  } catch (err) {
    resp.status(404).send()
  }
})
server.put('/myProfile/:userId', (req, resp) => {
  const { userId } = req.params
  const data = req.body
  try {
    const ID = parseInt(userId)
    database.myProfile[ID - 1].data = {
      ...database.myProfile[ID - 1].data,
      ...data,
    }
    database.users[ID - 1] = { ...database.users[ID - 1], ...data }
    resp.status(200).jsonp(database.myProfile[ID - 1])
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
      resp.jsonp({ data: { token } })
    }
  } else {
    resp.status(404).send()
  }
})

server.post('/auth/userLogin/', (req, resp) => {
  const { username, password } = req.body
  const user = database.users.find(
    (user) => user.userId === username && user.password === password
  )
  if (user) {
    const token = jwt.sign({ id: user.id }, tokenSecret, { expiresIn: '900s' })
    const refreshToken = jwt.sign({ id: user.id }, refreshTokenSecret, {
      expiresIn: '86400s',
    })
    tokens[refreshToken] = token
    resp.status(200).jsonp({
      data: {
        token,
        refreshToken,
        userId: user.id,
        profileType: user.profileType,
      },
    })
  } else {
    resp.status(404).send()
  }
})

// verify authentication
server.use((req, resp, next) => {
  const closed = ['access', 'myProfile']
  const path = req.path.split('/')[1]
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

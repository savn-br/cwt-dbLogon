const path = require('path')
const jwt = require('jsonwebtoken')
const jsonServer = require('json-server')
const database = require(path.join(__dirname, 'db.js'))()
const server = jsonServer.create()
const router = jsonServer.router(database)
const middlewares = jsonServer.defaults()

const port = 3333
server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/auth', (req, resp) => {
  const { username, password } = req.body
  const user = database.users.find(
    (user) => user.username === username && user.password === password
  )
  if (user) {
    const token = jwt.sign({ id: user.id }, 'secret')
    resp.jsonp({ token })
  }
  resp.status(404).send()
})

// verify authentication
server.use((req, resp, next) => {
  const closed = ['users', 'profiles', 'systems', 'modules']
  const path = req.path.replace(/\//g, '')
  if (closed.includes(path)) {
    try {
      jwt.verify(req.headers.authorization.split(' ')[1], 'secret')
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

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const cartola = require('./server/cartola-api')
const loginGlobo = require('./server/login-globo-api')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const jsonfyResult = res => ({ data }) => res.end(JSON.stringify(data), 'utf8')

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const {
      pathname,
      query: { url },
    } = parsedUrl
    const { method, data } = req

    if (pathname === '/api/cartola') {
      cartola({ url, method, data }).then(jsonfyResult(res))
    } else if (pathname === '/api/login-globo') {
      loginGlobo({ url, method, data }).then(jsonfyResult(res))
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000') // eslint-disable-line
  })
})

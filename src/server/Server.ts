import express from 'express'

const server = express()

server.get('/user', (_, res) => {
  return res.send('Hello')
})

export { server }

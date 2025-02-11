// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//   response.write("Hi")

//   return response.end()
// })

// server.listen(3333)

import { fastify } from "fastify";

const server = fastify()

server.post('/videos', () => {
  return 'Hello World'
})

server.get('/videos', () => {
  return 'Hello Rocketseat'
})

server.put('/videos/:id', () => {
  return 'Hello Node.js'
})

server.delete('/videos/:id', () => {
  return 'Hello Node.js'
})

server.listen({
  port: 3333,
})
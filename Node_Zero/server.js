// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//   response.write("Hi")

//   return response.end()
// })

// server.listen(3333)

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js"

const database = new DatabaseMemory()

const server = fastify()

server.post('/videos', () => {
  database.create({
    title: 'Video 01',
    description: 'Esse é o video 01',
    duration: 180,
  })
  console.log(database.list())
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
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
 
server.post('/videos', (request, replay) => {
  const { title, description, duration } = request.body
 
  database.create({
    title,
    description,
    duration,
  })

  return replay.status(201).send()
})

server.get('/videos', () => {
  const videos = database.list()
  
  return videos
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
import express from 'express'
import post_routes from './routes/post_routes.js'
import { connect } from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'


const app = express()
const port = 3000

// securtity middleware should be used before any other middleware
app.use(helmet())
// cors middleware to allow cross-origin requests
app.use(cors())

// use express.json() middleware to parse JSON request bodies
app.use(express.json())

// flask app.register_blueprint(post_routes, url_prefix='/posts')
// app.use inserts middleware into the request handling pipeline
app.use(post_routes)

// start the server on the specified port
// the callback function is executed when the server starts
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  connect()
})

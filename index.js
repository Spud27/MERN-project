import express from 'express'
import mongoose from 'mongoose'
import post_routes from './routes/post_routes.js'


const app = express()
const port = 3000

// use express.json() middleware to parse JSON request bodies
app.use(express.json())

// flask app.register_blueprint(post_routes, url_prefix='/posts')
// app.use inserts middleware into the request handling pipeline
app.use(post_routes)

// start the server on the specified port
// the callback function is executed when the server starts
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  // connect to MongoDB
//   takes a connection string as an argument
await mongoose.connect('mongodb://localhost:27017/mern_project')
console.log(mongoose.connection.readyState === 1 ? 'Connected to MongoDB' : 'Failed to connect to MongoDB')
})

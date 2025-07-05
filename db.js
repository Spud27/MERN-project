import mongoose from 'mongoose'

// connect to MongoDB
async function connect() {
    // mongoose.connect returns a promise, so we can use await to wait for the connection to be established
    // takes a connection string as an argument
    await mongoose.connect('mongodb://localhost:27017/mern_project')
    console.log(mongoose.connection.readyState === 1 ? 'Connected to MongoDB' : 'Failed to connect to MongoDB')
}

// named export
// js will automatically export this function wrapped in an object
// { close: close }
// where the value of the key is the function itself
// this allows us to import the function in other files
async function close() {
  await mongoose.disconnect()
  console.log(mongoose.connection.readyState === 0 ? 'Connection to MongoDB closed' : 'Failed to close connection to MongoDB')
}

// best practice is to export functions as named exports
export default { connect, close } // default export an object with connect and close methods
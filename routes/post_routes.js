// import express from 'express'
import { Router } from 'express' // destructuring import
import Post from '../models/post.js' // import the Post model

const router = Router()



// posts routes
// GET all posts
router.get('/posts', async (req, res) => {
  res.send(await Post.find({ isPublished: true })) // using mongoose to find all posts
})
// GET one post
router.get('/posts/:id', async (req, res) => {
  const postId = parseInt(req.params.id, 10)
  const post = await Post.findOne({_id: postId}) // using mongoose to find a post by id
  // if post is found, send it as a response
  
  if (post) {
    res.json(post)
  } else {
    res.status(404).send('Post not found')
  }
})
// create a new post
router.post('/posts', async (req, res) => {
    try {
            // get post data from the request body
    const bodyData = req.body
    // create and save a new post instance
    const post = await Post.create(bodyData) // using mongoose to create a new post instance
    // send the post as a response
    res.status(201).send(post) 
    }
    catch (error) {
        // log the error to an error file
        res.status(400).send({ error: error.message })
    }
})
// update a post
async function updatePost(req, res) {
    // 1. fetch the post from the database using the id from the request params
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'})
    if (post) {
        // 2. save the post to the database
        post.save() // using mongoose to save the post instance
        // 3. send the updated post as a response
        res.send(post)
    } else {
        // if post is not found, send a 404 response
        res.status(404).send({ error: `Post with id = ${req.params.id} not found` })
    }
}

router.put('/posts/:id', updatePost) // update a post by id
router.patch('/posts/:id', updatePost) // update a post by id with partial data

// delete a post
router.delete('/posts/:id', async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id) // using mongoose to delete a post by id
  if (post) {
    res.status(204).send(post) // send a 204 response if post is deleted
  } else {
    res.status(404).send({ error: `Post with id = ${req.params.id} not found` }) // send a 404 response if post is not found
  } 
})

// one default export allowed per module
// its anonymous
export default router
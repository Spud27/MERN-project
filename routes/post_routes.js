// import express from 'express'
import { Router } from 'express' // destructuring import
import Post from '../models/post.js' // import the Post model

const router = Router()

const posts = [
  { 
    id: 1, 
    title: 'Post One',
    body: 'This is the content of post one.'
 },
  { 
    id: 2, 
    title: 'Post Two', 
    body: 'This is the content of post two.'
 },
  { 
    id: 3, 
    title: 'Post 3333', 
    body: 'This is the content of post three.'
 }
]

// posts routes
// GET all posts
router.get('/posts', async (req, res) => {
  res.send(await Post.find()) // using mongoose to find all posts
})
// GET one post
router.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10)
  const post = posts.find(p => p.id === postId)
  
  if (post) {
    res.json(post)
  } else {
    res.status(404).send('Post not found')
  }
})
// create a new post
router.post('/posts', (req, res) => {
    // get post data from the request body
    const bodyData = req.body
    // create a new post instance
    // commit the new post to the database
    // set the post to the request body
})
// update a post
// delete a post

// one default export allowed per module
// its anonymous
export default router
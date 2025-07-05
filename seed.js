// import { connect, close } from './db.js' 
import Post from "./models/post.js";
import db from './db.js'
import Category from "./models/category.js";

const categories = [
  { 
    name: 'Food', 
    description: 'Posts related to food.'
  },
  { 
    name: 'Coding', 
    description: 'Posts related to coding.'
  },
  { 
    name: 'Movies', 
    description: 'Posts related to movies.'
  },
  { 
    name: 'Other', 
    description: 'Other.'
  },
]

const posts = [
  { 
    id: 1, 
    title: 'Post One',
    body: 'This is the content of post one.',
    isPublished: true
 },
  { 
    id: 2, 
    title: 'Post Two', 
    body: 'This is the content of post two.',
    isPublished: false
 },
  { 
    id: 3, 
    title: 'Post 3333', 
    body: 'This is the content of post three.',
    isPublished: true
 }
]

db.connect() // connect to the database

// delete all existing categories
await Category.deleteMany({}) // this will delete all categories in the database
//  creates and saves a new Category instance for each category in the categories array
await Category.create(categories)
console.log('Categories seeded successfully')

// delete all existing posts
await Post.deleteMany({}) // this will delete all posts in the database
//  creates and saves a new Post instance for each post in the posts array
await Post.create(posts)
console.log('Posts seeded successfully')

// we still have to close the connection to the database
// this is done to prevent the process from hanging after the script finishes
db.close()

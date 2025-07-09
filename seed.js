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
    isPublished: true,
    category: cats[0]
 },
  { 
    id: 2, 
    title: 'Post Two', 
    body: 'This is the content of post two.',
    isPublished: false,
    category: cats[1]
 },
  { 
    id: 3, 
    title: 'Post 3333', 
    body: 'This is the content of post three.',
    isPublished: true,
    category: cats[2]
 }
]

db.connect() // connect to the database

// delete all existing categories
await Category.deleteMany({}) // this will delete all categories in the database
//  creates and saves a new Category instance for each category in the categories array
const cats = await Category.create(categories)
console.log('Categories seeded successfully')

// at this point categories are seeded in the database and each assigned a unique ObjectId
// both in the db AND in the categories array

// delete all existing posts
await Post.deleteMany({}) // this will delete all posts in the database

// before we do the next statement, we need to ensure that the categories are already seeded in the database
// we can use the ObjectId of the categories to assign them to the posts

// posts[0].category = (await Category.findOne({ name: 'Coding' }))._id
// posts[1].category = (await Category.findOne({ name: 'Movies' }))._id

//  creates and saves a new Post instance for each post in the posts array
await Post.create(posts)
console.log('Posts seeded successfully')

// we still have to close the connection to the database
// this is done to prevent the process from hanging after the script finishes
db.close()

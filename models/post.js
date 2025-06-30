import { model } from 'mongoose';

// Create a mongoose model for posts

// Express is an ODM (Object Document Mapper) for MongoDB
// it provides a way to define schemas and models for MongoDB documents
const Post = model('Post', {
    title: String,
    body: String,
    isPublished: Boolean
});

export default Post;


// Create a mongoose model for posts
import { model } from 'mongoose';

const Post = model('Post', {
    title: String,
    body: String,
    isPublished: Boolean
});

export default Post;


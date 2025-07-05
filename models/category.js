import { model } from 'mongoose';

// Create a mongoose model for posts

// Express is an ODM (Object Document Mapper) for MongoDB
// it provides a way to define schemas and models for MongoDB documents
const Category = model('Category', {
    name: {type: String, required: true},
    description: {type: String, required: false}
});

export default Category;


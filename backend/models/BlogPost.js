const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true, default: 'Hirealize Intel' },
    category: { type: String, required: true },
    imageUrl: { type: String },
    published: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);

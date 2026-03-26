const BlogPost = require('../models/BlogPost');

// Get all published blog posts
exports.getBlogPosts = async (req, res) => {
    try {
        const posts = await BlogPost.find({ published: true }).sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog posts', error: error.message });
    }
};

// Create a new blog post
exports.createBlogPost = async (req, res) => {
    try {
        const newPost = await BlogPost.create(req.body);
        res.status(201).json({ success: true, post: newPost });
    } catch (error) {
        res.status(500).json({ message: 'Error creating blog post', error: error.message });
    }
};

// Get a single blog post
exports.getBlogPostById = async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Blog post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog post', error: error.message });
    }
};

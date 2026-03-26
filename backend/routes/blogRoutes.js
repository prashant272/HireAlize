const express = require('express');
const router = express.Router();
const { getBlogPosts, createBlogPost, getBlogPostById } = require('../controllers/blogController');

router.get('/', getBlogPosts);
router.post('/', createBlogPost);
router.get('/:id', getBlogPostById);

module.exports = router;

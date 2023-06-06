const express = require('express');
const blogController = require('../../controller/blog.controller');

const router = express.Router();

// Create a blog
router.post('/blog', blogController.createBlog);

// Delete a blog
router.delete('/blog/:id', blogController.removeBlog);

// Get all blogs
router.get('/blog', blogController.getAllBlogs);

// Get a specific blog
router.get('/blog/:id', blogController.getBlog);

// Update a blog
router.put('/blog/:id', blogController.updateBlog);

module.exports = router;

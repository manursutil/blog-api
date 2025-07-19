const express = require('express');
const { getAllBlogs, createNewPost, deletePost, updateBlog } = require('../controllers/blogController');
const router = express.Router();

router.get('/', getAllBlogs);
router.post('/', createNewPost);
router.delete('/:id', deletePost);
router.put('/:id', updateBlog);

module.exports = router;
var express = require('express');
var router = express.Router();
// 引用 postsContr.js
const postsContr = require('../controllers/postsContr');

router.get('/', (req, res) => postsContr.getAllPosts(req, res));

router.post('/', (req, res) => postsContr.createPost(req, res));

router.delete('/:id', (req, res) => postsContr.deleteOne(req, res));

router.delete('/', (req, res) => postsContr.deleteAll(req, res));

router.patch('/:id', (req, res) => postsContr.updatePost(req, res));

module.exports = router;

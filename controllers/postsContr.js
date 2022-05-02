var express = require('express');
var router = express.Router();
// 引用檔案postsModel.js
const postsModel = require('../models/postsModel');

const postsController = {
    getAllPosts: async (req, res) => {
        console.log(req.body);

        const post = await postsModel.find();
        res.status(200).json({
            post,
        });
    },
    createPost: async (req, res) => {
        const newPost = await postsModel.create(req.body);
        res.status(200).json({
            post: newPost,
        });
    },
    deleteOne: async (req, res) => {
        const id = req.body._id;
        await postsModel.findOneAndDelete(id);
        res.status(200).json({
            status: '刪除單筆資料成功',
        });
    },
    deleteAll: async (req, res) => {
        await postsModel.deleteMany({});
        res.status(200).json({
            status: '刪除全部資料成功',
        });
    },
    updatePost: async (req, res) => {
        const id = req.body._id;
        const data = req.body;
        await postsModel.findByIdAndUpdate(id, data);
        res.status(200).json({
            status: '更新資料成功',
        });
    },
};

module.exports = postsController;

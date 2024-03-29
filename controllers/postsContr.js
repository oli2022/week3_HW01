var express = require('express');
var router = express.Router();
// 引用檔案postsModel.js
const postsModel = require('../models/postsModel');
const { errorHandle, deleteError, deleteAllError, nullError } = require('../responseHandle/errorHandle');

const postsController = {
    getAllPosts: async (req, res) => {
        const post = await postsModel.find();
        res.status(200).json({
            post,
        });
    },
    createPost: async (req, res) => {
        try {
            const newPost = await postsModel.create(req.body);
            res.status(200).json({
                post: newPost,
                status: '新增單筆資料成功',
            });
        } catch (error) {
            nullError(res, error);
        }
    },
    deleteOne: async (req, res) => {
        try {
            const id = req.params.id;
            await postsModel.findByIdAndDelete(id);
            res.status(200).json({
                status: '刪除單筆資料成功',
            });
        } catch (error) {
            deleteError(res, error);
        }
    },
    deleteAll: async (req, res) => {
        try {
            if (req.originalUrl === '/posts/') {
                await postsModel.deleteMany({});
                res.status(200).json({
                    status: '刪除全部資料成功',
                });
            } else {
                deleteAllError(res, error);
            }
        } catch (error) {
            deleteAllError(res, error);
        }
    },
    updatePost: async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            await postsModel.findByIdAndUpdate(id, data);
            res.status(200).json({
                status: '更新資料成功',
                data,
            });
        } catch (error) {
            deleteError(res, error);
        }
    },
};

module.exports = postsController;

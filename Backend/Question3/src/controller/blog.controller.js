const blogService = require('../services/blog.service');

const createBlog = async (req, res) => {
    try {
        const response = await blogService.createBlog(req.body);
        res.status(200).json({
            message: 'Successfully blog created',
            success: true,
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

const removeBlog = async (req, res) => {
    try {
        const response = await blogService.deleteBlog(req.params.id);
        res.status(200).json({
            message: 'Successfully removed the blog',
            success: true,
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

const updateBlog = async (req, res) => {
    try {
        const response = await blogService.updateBlog(req.params.id, req.body);
        res.status(200).json({
            message: 'Successfully update the blog',
            success: true,
            data: response
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

const getBlog = async (req, res) => {
    try {
        const response = await blogService.getBlog(req.params.id);
        res.status(200).json({
            message: 'Successfully fetched the blog',
            success: true,
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

const getAllBlogs = async (req, res) => {
    try {
        const response = await blogService.getAllBlogs();
        res.status(200).json({
            message: 'Successfully fetched all the blog',
            success: true,
            data: response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

module.exports = {
    createBlog,
    removeBlog,
    getAllBlogs,
    getBlog,
    updateBlog,
}
const Blog = require('../models/blog');

const createBlog = async (data) => {
    try {
        const { title, content } = data;
        const newBlog = new Blog({ title, content });
        const blog = await newBlog.save();
        return blog;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const deleteBlog = async (id) => {
    try {
        const blog = await Blog.findOneAndDelete({ _id: id });
        return blog;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getAllBlogs = async () => {
    try {
        const blogs = await Blog.find();
        return blogs;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getBlog = async (id) => {
    try {
        const blog = await Blog.findById(id);
        return blog;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateBlog = async (id, data) => {
    try {
        const { title, content } = data;
        const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });
        return updatedBlog;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    createBlog,
    deleteBlog,
    getAllBlogs,
    getBlog,
    updateBlog
};

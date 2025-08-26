// frontend/src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://blogs-backend-sl4p.onrender.com/api",
});

export const fetchBlogs = () => API.get("/blogs");   // ✅ named export

export const fetchBlogById = (id) => API.get(`/blogs/${id}`);
export const createBlog = (blogData) => API.post("/blogs", blogData);
export const rateBlog = (id, rating) => API.post(`/blogs/${id}/rate`, { rating });
export const fetchComments = (blogId) => API.get(`/comments/${blogId}`);
export const addComment = (commentData) => API.post("/comments", commentData);

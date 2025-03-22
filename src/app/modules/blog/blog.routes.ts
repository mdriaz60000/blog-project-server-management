import express from 'express';
import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post('/blog', BlogControllers.createBlog);

router.get('/blogs', BlogControllers.getAllBlogs);

router.get('/:blogId', BlogControllers.getSingleBlog);



export const blogRoutes = router;
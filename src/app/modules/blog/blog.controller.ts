import { Request, Response } from "express";
import { BlogService } from "./blog.service";



const createBlog = async (req: Request, res: Response) => {
  try {
    const { blog: blogData } = req.body;
    const result = await BlogService.createBlogIntoDB(blogData);

    res.status(200).json({
      success: true,
      message: 'blog data is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const result = await BlogService.getBlogIntoDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleBlog = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await BlogService.getSingleBlogFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};



export const BlogControllers = {
createBlog,
getAllBlogs,
getSingleBlog
}
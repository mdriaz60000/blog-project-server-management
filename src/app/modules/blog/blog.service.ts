import { blog } from "./blog.interface";
import { BlogModel } from "./blog.model";



const createBlogIntoDB = async (blog : blog) => {
  const result = await BlogModel.create(blog);
  return result;
};
const getBlogIntoDB = async () => {
  const result = await BlogModel.find();
  return result;
};

const getSingleBlogFromDB = async (id: string) => {
  const result = await BlogModel.findOne({ id });
  return result;
};


export const BlogService = {
  createBlogIntoDB,
  getBlogIntoDB,
  getSingleBlogFromDB
}
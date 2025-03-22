import { Types } from "mongoose";

export interface TBlog {
    title: string;
    content: string;
    isPublished: boolean;
    author: Types.ObjectId
}


export interface blog {
    title: string;
    content: string;
   
}
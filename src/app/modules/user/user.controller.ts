import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { UserService } from './user.service';




  
  const  createUser = async (req: Request, res: Response, next : NextFunction) => {
    try {
      const {name, email, password  } = req.body
      console.log(email, password, name)
      const userData : any = { name, email, password };

      
      const result = await UserService.createUser(userData)
      res.status(200).json({
        success: true,
        massage: " User created successfully",
        data: result,
      });

    } catch (error) {
     next(error)
    }
  }


  //  Get a user by ID
const getUserById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      if (!user) {
        return res.status(httpStatus.NOT_FOUND).json({
          success: false,
          message: 'User not found',
        });
      }
      return res.status(httpStatus.OK).json({
        success: true,
        data: user,
      });
    } catch (error: any) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  //  Get all users
  const getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await UserService.getAllUsers();
      return res.status(httpStatus.OK).json({
        success: true,
        data: users,
      });
    } catch (error: any) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Update a user
 const updateUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedUser = await UserService.updateUser(id, req.body);
      if (!updatedUser) {
        return res.status(httpStatus.NOT_FOUND).json({
          success: false,
          message: 'User not found',
        });
      }
      return res.status(httpStatus.OK).json({
        success: true,
        message: 'User updated successfully',
        data: updatedUser,
      });
    } catch (error: any) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: error.message,
      });
    }
  }

  //  Soft delete a user (sets isDeleted to true)
const deleteUser = async(req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedUser = await UserService.deleteUser(id);
      if (!deletedUser) {
        return res.status(httpStatus.NOT_FOUND).json({
          success: false,
          message: 'User not found',
        });
      }
      return res.status(httpStatus.OK).json({
        success: true,
        message: 'User deleted successfully',
      });
    } catch (error: any) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  export const UserController = {
     createUser ,
     getUserById,
     deleteUser,
     updateUser

  }


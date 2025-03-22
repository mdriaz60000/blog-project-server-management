import { User } from './user.model';
import { TUser } from './user.interface';

export class UserService {
  //  Create a new user
  static async createUser(userData: TUser): Promise<TUser> {
    const newUser = await User.create(userData);
    return newUser;
  }

  //  Get a user by ID (excluding deleted users)
  static async getUserById(id: string): Promise<TUser | null> {
    return await User.findOne({ id, isDeleted: false }).select('-password');
  }

  //  Get all users (excluding deleted users)
  static async getAllUsers(): Promise<TUser[]> {
    return await User.find({ isDeleted: false }).select('-password');
  }

  //  Update a user
  static async updateUser(id: string, updateData: Partial<TUser>): Promise<TUser | null> {
    return await User.findOneAndUpdate(
      { id, isDeleted: false }, 
      updateData, 
      { new: true, runValidators: true }
    ).select('-password');
  }

  //  Soft delete a user (sets isDeleted to true)
  static async deleteUser(id: string): Promise<TUser | null> {
    return await User.findOneAndUpdate(
      { id }, 
      { isDeleted: true }, 
      { new: true }
    );
  }
}

import express, { Request, Response, NextFunction } from 'express';
import { UserController } from './user.controller';


const router = express.Router();

router.post('/user',  UserController.createUser)


export default router;

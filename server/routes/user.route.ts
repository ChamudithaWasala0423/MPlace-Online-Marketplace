import express from 'express';
import { 
    registrationUser,
    activateUser, 
    loginUser
 } from '../controllers/user.controller';

 import { isAuthenticated } from '../middleware/auth';

 const userRouter = express.Router();

userRouter.post("/registration", (req: any, res: any, next: any) => {
  registrationUser(req, res, next);
});

userRouter.post("/activate-user", (req: any, res: any, next: any) => {
  activateUser(req, res, next);
});

userRouter.post("/login", (req: any, res: any, next: any) => {
    loginUser(req, res, next);
  });
  


export default userRouter;
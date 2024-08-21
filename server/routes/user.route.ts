import express from 'express';
import { 
    registrationUser,
    activateUser, 
    loginUser,
    logoutUser,
    updateAccessToken,
    getUserInfo
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

userRouter.get("/logout", isAuthenticated, (req: any, res: any, next: any) => {
    logoutUser(req, res, next);
});

userRouter.get("/refresh", (req: any, res: any, next: any) => {
    updateAccessToken(req, res, next); 
});
  

userRouter.get("/me",isAuthenticated, (req: any, res: any, next: any) => {
  getUserInfo(req, res, next);
});


export default userRouter;
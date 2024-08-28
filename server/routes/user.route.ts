import express from 'express';
import { 
    registrationUser,
    activateUser, 
    loginUser,
    logoutUser,
    updateAccessToken,
    getUserInfo,
    updateUserInfo,
    updatePassword
 } from '../controllers/user.controller';

 import { isAuthenticated } from '../middleware/auth';

 const userRouter = express.Router();

 //user registration
userRouter.post("/registration", (req: any, res: any, next: any) => {
  registrationUser(req, res, next);
});

//activate user
userRouter.post("/activate-user", (req: any, res: any, next: any) => {
  activateUser(req, res, next);
});

//login user
userRouter.post("/login", (req: any, res: any, next: any) => {
    loginUser(req, res, next);
});

//logout user
userRouter.get("/logout", isAuthenticated, (req: any, res: any, next: any) => {
    logoutUser(req, res, next);
});

//refresh token
userRouter.get("/refresh", (req: any, res: any, next: any) => {
    updateAccessToken(req, res, next); 
});
  
//get user info
userRouter.get("/me",isAuthenticated, (req: any, res: any, next: any) => {
  getUserInfo(req, res, next);
});

//update user info
userRouter.put("/update-user-info",isAuthenticated,  (req: any, res: any, next: any) => {
  updateUserInfo(req, res, next);
});

//update user password
userRouter.put("/update-user-password",isAuthenticated,  (req: any, res: any, next: any) => {
  updatePassword(req, res, next);
});



export default userRouter;
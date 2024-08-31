"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const auth_1 = require("../middleware/auth");
const userRouter = express_1.default.Router();
//user registration
userRouter.post("/registration", (req, res, next) => {
    (0, user_controller_1.registrationUser)(req, res, next);
});
//activate user
userRouter.post("/activate-user", (req, res, next) => {
    (0, user_controller_1.activateUser)(req, res, next);
});
//login user
userRouter.post("/login", (req, res, next) => {
    (0, user_controller_1.loginUser)(req, res, next);
});
//logout user
userRouter.get("/logout", auth_1.isAuthenticated, (req, res, next) => {
    (0, user_controller_1.logoutUser)(req, res, next);
});
//refresh token
userRouter.get("/refresh", (req, res, next) => {
    (0, user_controller_1.updateAccessToken)(req, res, next);
});
//get user info
userRouter.get("/me", auth_1.isAuthenticated, (req, res, next) => {
    (0, user_controller_1.getUserInfo)(req, res, next);
});
//update user info
userRouter.put("/update-user-info", auth_1.isAuthenticated, (req, res, next) => {
    (0, user_controller_1.updateUserInfo)(req, res, next);
});
//update user password
userRouter.put("/update-user-password", auth_1.isAuthenticated, (req, res, next) => {
    (0, user_controller_1.updatePassword)(req, res, next);
});
exports.default = userRouter;

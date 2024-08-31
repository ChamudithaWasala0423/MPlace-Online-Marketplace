"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = exports.updateUserInfo = exports.getUserInfo = exports.updateAccessToken = exports.logoutUser = exports.loginUser = exports.activateUser = exports.createActivationToken = exports.registrationUser = void 0;
require("dotenv").config();
const user_model_1 = __importDefault(require("../models/user.model"));
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const CatchAsyncErrors_1 = require("../middleware/CatchAsyncErrors");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = require("../utils/jwt");
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const sendMail_1 = __importDefault(require("../utils/sendMail"));
const user_service_1 = require("../services/user.service");
//user registration
exports.registrationUser = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const isEmailExist = await user_model_1.default.findOne({ email });
        if (isEmailExist) {
            return next(new ErrorHandler_1.default("Email already exists", 400));
        }
        const user = {
            name,
            email,
            password
        };
        const activationToken = (0, exports.createActivationToken)(user);
        const activationCode = activationToken.activationCode;
        const data = { user: { name: user.name }, activationCode };
        const html = await ejs_1.default.renderFile(path_1.default.join(__dirname, "../mails/activation-mail.ejs"), data);
        try {
            await (0, sendMail_1.default)({
                email: user.email,
                subject: "Activate your account",
                tempalte: "activation-mail.ejs",
                data,
            });
            res.status(200).json({
                success: true,
                message: "Account created successfully. Please check your email to activate your account",
                activationToken: activationToken.token,
            });
        }
        catch (error) {
            return next(new ErrorHandler_1.default(error.message, 400));
        }
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 400));
    }
});
const createActivationToken = (user) => {
    const activationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const token = jsonwebtoken_1.default.sign({ user, activationCode }, process.env.ACTIVATION_SECRET, {
        expiresIn: "5m"
    });
    return { token, activationCode };
};
exports.createActivationToken = createActivationToken;
exports.activateUser = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, Next) => {
    try {
        const { activation_token, activation_code } = req.body;
        const newUser = jsonwebtoken_1.default.verify(activation_token, process.env.ACTIVATION_SECRET);
        if (newUser.activationCode !== activation_code) {
            return Next(new ErrorHandler_1.default("Invalid activation code", 400));
        }
        const { name, email, password } = newUser.user;
        const existsUser = await user_model_1.default.findOne({ email });
        if (existsUser) {
            return Next(new ErrorHandler_1.default("Email already exists", 400));
        }
        const user = await user_model_1.default.create({
            name,
            email,
            password
        });
        res.status(201).json({
            success: true,
            message: "Account activated successfully"
        });
    }
    catch (error) {
        return Next(new ErrorHandler_1.default(error.message, 400));
    }
});
exports.loginUser = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new ErrorHandler_1.default("Please enter email and password", 400));
        }
        const user = await user_model_1.default.findOne({ email }).select("+password");
        if (!user) {
            return next(new ErrorHandler_1.default("Invalid email or password", 400));
        }
        const isPasswordMatched = await user.comaparePassword(password);
        if (!isPasswordMatched) {
            return next(new ErrorHandler_1.default("Invalid email or password", 400));
        }
        (0, jwt_1.sendToken)(user, 200, res);
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 400));
    }
});
//logout user
exports.logoutUser = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        res.cookie("access_token", "", { maxAge: 1, });
        res.cookie("refresh_token", "", { maxAge: 1, });
        const userId = req.user?._id || '';
        console.log(userId);
        res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 400));
    }
});
//update access token
exports.updateAccessToken = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const refresh_token = req.cookies.refreshToken;
        const decoded = jsonwebtoken_1.default.verify(refresh_token, process.env.REFRESH_TOKEN);
        const message = "Could not refresh token";
        if (!decoded) {
            return next(new ErrorHandler_1.default(message, 400));
        }
        const session = await user_model_1.default.findById(decoded.id);
        if (!session) {
            return next(new ErrorHandler_1.default(message, 400));
        }
        const user = session.toObject();
        const access_token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.ACCESS_TOKEN, {
            expiresIn: "5m"
        });
        const refresh_tokens = jsonwebtoken_1.default.sign({ id: user._id }, process.env.REFRESH_TOKEN, {
            expiresIn: "3d"
        });
        req.user = user;
        res.cookie("access_token", access_token, jwt_1.accessTokenOptions);
        res.cookie("refresh_token", refresh_tokens, jwt_1.refreshTokenOptions);
        res.status(200).json({
            success: true,
            access_token,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 400));
    }
});
//get user info
exports.getUserInfo = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const userId = req.user?._id;
        if (!userId) {
            // Handle the case where user ID is not available
            return next(new ErrorHandler_1.default('User ID not available', 401));
        }
        (0, user_service_1.getUserById)(userId, res);
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 400));
    }
});
exports.updateUserInfo = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const { name, email } = req.body;
        const userId = req.user?._id;
        const user = await user_model_1.default.findById(userId);
        if (email && user) {
            const isEmailExist = await user_model_1.default.findOne({ email });
            if (isEmailExist) {
                return next(new ErrorHandler_1.default("Email already exists", 400));
            }
        }
        if (name && user) {
            user.name = name;
        }
        await user?.save();
        res.status(200).json({
            success: true,
            user,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 400));
    }
});
exports.updatePassword = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const { oldPassword, newPassword } = req.body;
        if (!oldPassword || !newPassword) {
            return next(new ErrorHandler_1.default("please enter new and old password", 400));
        }
        const user = await user_model_1.default.findById(req.user?._id).select("+password");
        if (user?.password === undefined) {
            return next(new ErrorHandler_1.default("Inavlied user", 400));
        }
        const isPasswordMatched = await user?.comaparePassword(oldPassword);
        if (!isPasswordMatched) {
            return next(new ErrorHandler_1.default("Old password is incorrect", 400));
        }
        user.password = newPassword;
        await user.save();
        res.status(200).json({
            success: true,
            user,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 400));
    }
});
// export const updateProfilePicture = CatchAsyncErrors(async(req: Request, res: Response, next: NextFunction) => {
//     try{
//         const {avatar} = req.body;
//         const userId = req.user?._id;
//         const user = await UserModel.findById(userId);
//         if(avatar && user){
//             //install cloudinary - npm i cloudinary
//             //create account on cloudinary
//             //if user already has avatar then call this if
//             if(user?.avatar.public_id){
//                 //delete previous image
//                 await cloudinary.v2.uploader.destroy(user?.avatar?.public_id);
//                 const mycloud =   await cloudinary.v2.uploader.upload(avatar, {
//                     folder: "avatar",
//                     width: 150,
//                     crop: "scale",
//                 });
//                 user.avatar = {
//                     public_id: mycloud.public_id,
//                     url: mycloud.secure_url,
//                 }
//             }else{
//             const mycloud =   await cloudinary.v2.uploader.upload(avatar, {
//                     folder: "avatar",
//                     width: 150,
//                     crop: "scale",
//             });
//             user.avatar = {
//                 public_id: mycloud.public_id,
//                 url: mycloud.secure_url,
//         }
//         }
//     }
//     await user?.save();
//     await redis.set(user?._id.toString(), JSON.stringify(user));
//     res.status(200).json({
//         success: true,
//         user,
//     });
// }catch(error: any){
//     return next(new ErrorHandler(error.message, 400));
// }
// });

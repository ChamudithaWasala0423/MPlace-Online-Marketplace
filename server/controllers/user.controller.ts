require("dotenv").config();
import {Request, Response, NextFunction} from "express";
import UserModel, { IUser } from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncErrors } from "../middleware/CatchAsyncErrors";
import jwt, {JwtPayload, Secret} from "jsonwebtoken";
import { accessTokenOptions, refreshTokenOptions, sendToken } from "../utils/jwt";
import ejs from "ejs";
import path from "path";
import sendMail from "../utils/sendMail";
import { getUserById } from "../services/user.service";


//register user
interface IRegistrationBody{
    name: string;
    email: string;
    password: string;
    avatar?: string;
}


//user registration
export const registrationUser = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {name, email,password} = req.body;
        const isEmailExist = await UserModel.findOne({email});
        if(isEmailExist){
            return next(new ErrorHandler("Email already exists", 400));
        }

        const user: IRegistrationBody = {
            name,
            email,
            password
        }

        const activationToken = createActivationToken(user);
        const activationCode = activationToken.activationCode;

        const data = {user: {name:user.name}, activationCode};
        const html = await ejs.renderFile(path.join(__dirname, "../mails/activation-mail.ejs"), data);

        try{
            await sendMail({
                email: user.email,
                subject: "Activate your account",
                tempalte: "activation-mail.ejs",
                data,
            });

            res.status(200).json({
                success: true,
                message: "Account created successfully. Please check your email to activate your account",
                activationToken : activationToken.token,
            });
        }catch(error: any){
            return next(new ErrorHandler(error.message, 400));

        }

    }catch(error: any){
        return next(new ErrorHandler(error.message, 400));
    }
});


//send activation token
interface IActivationToken{
    token : string;
    activationCode: string;
}

export const createActivationToken = (user: any) : IActivationToken => {
    const activationCode = Math.floor(100000 + Math.random() * 900000).toString();

    const token = jwt.sign({user, activationCode}, process.env.ACTIVATION_SECRET as Secret, {
        expiresIn: "5m"
    });

    return {token, activationCode};
}


//activate user
interface IActivationRequest{
    activation_token : string;
    activation_code : string;
}

export const activateUser = CatchAsyncErrors(async(req: Request, res:Response, Next: NextFunction) =>{
    try{
        const {activation_token, activation_code} = req.body as IActivationRequest;
        const newUser : {user: IUser; activationCode: string} = jwt.verify(activation_token, process.env.ACTIVATION_SECRET as string) as {user: IUser; activationCode: string};

        if(newUser.activationCode !== activation_code){
            return Next(new ErrorHandler("Invalid activation code", 400));
        }

        const {name, email, password} = newUser.user;

        const existsUser = await UserModel.findOne({email});

        if(existsUser){
            return Next(new ErrorHandler("Email already exists", 400));
        }

        const user = await UserModel.create({
            name,
            email,
            password
        });

        res.status(201).json({
            success: true,
            message: "Account activated successfully"
        });

    }catch(error: any){
        return Next(new ErrorHandler(error.message, 400));
    }
});


//login user
interface ILoginRequest{
    email: string;
    password: string;
}

export const loginUser = CatchAsyncErrors(async(req: Request, res: Response, next: NextFunction) => {
    try{
        const {email, password} = req.body as ILoginRequest;

        if(!email || !password){
            return next(new ErrorHandler("Please enter email and password", 400));
        }

        const user = await UserModel.findOne({email}).select("+password");

        if(!user){
            return next(new ErrorHandler("Invalid email or password", 400));
        }

        const isPasswordMatched = await user.comaparePassword(password);

        if(!isPasswordMatched){
            return next(new ErrorHandler("Invalid email or password", 400));
        }

        sendToken(user, 200, res);

    }catch(error: any){
        return next(new ErrorHandler(error.message, 400));
    }
});


//logout user
export const logoutUser = CatchAsyncErrors(async(req: Request, res: Response, next: NextFunction) => {
    try{
        res.cookie("access_token", "", {maxAge: 1,});
        res.cookie("refresh_token", "", {maxAge: 1,});
        const userId = req.user?._id || '';
        console.log(userId);
        res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    
    }catch(error: any){
        return next(new ErrorHandler(error.message, 400));
    }
});


//update access token
export const updateAccessToken = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const refresh_token = req.cookies.refreshToken as string;
        
        const decoded = jwt.verify(refresh_token, process.env.REFRESH_TOKEN as string) as JwtPayload;

        const message = "Could not refresh token";

        if(!decoded){
            return next(new ErrorHandler(message, 400));
        }

        const session = await UserModel.findById(decoded.id);

        if(!session){
            return next(new ErrorHandler(message, 400));
        }

        const user = session.toObject();

        const access_token = jwt.sign({id: user._id}, process.env.ACCESS_TOKEN as string, {
            expiresIn: "5m"
        });

        const refresh_tokens = jwt.sign({id: user._id}, process.env.REFRESH_TOKEN as string, {
            expiresIn: "3d"
        });

        req.user = user;

        res.cookie("access_token", access_token,accessTokenOptions);
        res.cookie("refresh_token", refresh_tokens,refreshTokenOptions);

        res.status(200).json({
            success: true,
            access_token,
        });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
    }
});


//get user info
export const getUserInfo = CatchAsyncErrors(async(req: Request, res: Response, next: NextFunction) => {
    try{
        const userId = req.user?._id;
        
        if (!userId) {
            // Handle the case where user ID is not available
            return next(new ErrorHandler('User ID not available', 401));
        }

        getUserById( userId, res);

    }catch(error: any){
        return next(new ErrorHandler(error.message, 400));
    }

});


//update user info
interface IUpdateUserInfo{
    name: string;
    email?: string;
    avatar: string;
}

export const updateUserInfo = CatchAsyncErrors(async(req: Request, res: Response, next: NextFunction) => {
    try{
        const {name, email} = req.body as IUpdateUserInfo;
        const userId = req.user?._id;
        const user = await UserModel.findById(userId);

        if(email && user){
            const isEmailExist = await UserModel.findOne({email});
            if(isEmailExist){
                return next(new ErrorHandler("Email already exists", 400));
            }
        }

        if(name && user){
            user.name = name;
        }

        await user?.save();

        res.status(200).json({
            success: true,
            user,
        });

    }catch(error: any){
        return next(new ErrorHandler(error.message, 400));

    }
});


//update user password
interface IUpdateUserPassword{
    oldPassword: string;
    newPassword: string;
}

export const updatePassword = CatchAsyncErrors(async(req: Request, res: Response, next: NextFunction) => {
    try{
        const {oldPassword, newPassword} = req.body as IUpdateUserPassword;

        if(!oldPassword || !newPassword){
            return next(new ErrorHandler("please enter new and old password", 400));
        }


        const user = await UserModel.findById(req.user?._id).select("+password");

        if(user?.password === undefined){
            return next(new ErrorHandler("Inavlied user", 400));
        }

        const isPasswordMatched = await user?.comaparePassword(oldPassword);

        if(!isPasswordMatched){
            return next(new ErrorHandler("Old password is incorrect", 400));
        } 

        user.password = newPassword;

        await user.save();

        res.status(200).json({
            success: true,
            user,
        });

    }catch(error:any){
        return next(new ErrorHandler(error.message, 400));
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

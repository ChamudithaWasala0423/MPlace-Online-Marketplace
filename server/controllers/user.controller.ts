require("dotenv").config();
import {Request, Response, NextFunction} from "express";
import UserModel, { IUser } from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncErrors } from "../middleware/CatchAsyncErrors";
import jwt, {JwtPayload, Secret} from "jsonwebtoken";
import { accessTokenOptions, refreshTokenOptions, sendToken } from "../utils/jwt";

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
        // const html = await ejs.renderFile(path.join(__dirname, "../mails/activation-mail.ejs"), data);

        try{
            // await sendMail({
            //     email: user.email,
            //     subject: "Activate your account",
            //     tempalte: "activation-mail.ejs",
            //     data,
            // });

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

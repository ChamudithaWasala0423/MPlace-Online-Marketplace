require("dotenv").config();
import jwt from "jsonwebtoken";
import {Response} from "express";
import { IUser } from "../models/user.model";

interface ITokenOptions {
    expires: Date;
    macAge : number;
    httpOnly: boolean;
    sameSite: "lax" | "strict" | "none" | undefined;
    secure?: boolean;
};


//parse environment variables to intergration  with fallback values 
const accessTokenExpire = parseInt(process.env.ACCESS_TOKEN_EXPIRE|| '300',10);
const refreshTokenExpire = parseInt(process.env.REFRESH_TOKEN_EXPIRE|| '1200',10);


//option for cookies
export const accessTokenOptions: ITokenOptions = {
    expires: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000),
    macAge: accessTokenExpire * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
};

export const refreshTokenOptions: ITokenOptions = {
    expires: new Date(Date.now() + refreshTokenExpire * 24 * 60 * 60 * 1000),
    macAge: accessTokenExpire * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
};

//send token to user
export const sendToken = (user: IUser,statusCode:number, res: Response) => {
    const accessToken = user.SignAccessToken();
    const refreshToken = user.SignRefreshToken();

    //only set secure option if we are in production
    if(process.env.NODE_ENV === "production"){
        accessTokenOptions.secure = true;
        refreshTokenOptions.secure = true;
    }

    res.cookie("accessToken", accessToken, accessTokenOptions);
    res.cookie("refreshToken", refreshToken, refreshTokenOptions);

    res.status(statusCode).json({ 
        success: true, 
        user,
        accessToken,
    });
};

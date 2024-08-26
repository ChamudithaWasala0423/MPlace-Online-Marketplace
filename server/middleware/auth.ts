import { Request, Response, NextFunction } from "express";
import { CatchAsyncErrors } from "./CatchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user.model"; 

// Check if the user is authenticated or not
export const isAuthenticated = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const access_token = req.cookies.accessToken as string;

    if (!access_token) {
        return next(new ErrorHandler("Please login first to access this resource", 400));
    }

    const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN as string) as JwtPayload;

    if (!decoded) {
        return next(new ErrorHandler("Access token is not valid", 400));
    }

    // Retrieve the user from MongoDB
    const user : any = await User.findById(decoded.id);

    if (!user) {
        return next(new ErrorHandler("User not found", 400));
    }

    req.user = user;

    next();
});
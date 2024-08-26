import { Response } from "express";
import UserModel from "../models/user.model";



//get user by id
export const getUserById = async (id: any, res: Response) => {
    try {
        const userJson = await UserModel.findById(id);
        if (userJson) {
            const user = JSON.parse(JSON.stringify(userJson));
            return res.status(200).json({
                success: true,
                user,
            });
        }

    } catch (error: any) {
        throw new Error(error.message);
    }
}
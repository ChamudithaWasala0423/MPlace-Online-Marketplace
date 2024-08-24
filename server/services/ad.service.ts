import { Response } from "express";
import AdModel from "../models/ad.model";
import UserModel from "../models/user.model";
import { CatchAsyncErrors } from "../middleware/CatchAsyncErrors";

//create course
export const createAd = CatchAsyncErrors(
  async (data: any, res: any, next: any, req: any) => {
    const ad = await AdModel.create(data);

    res.status(201).json({
      success: true,
      ad,
    });
  }
);

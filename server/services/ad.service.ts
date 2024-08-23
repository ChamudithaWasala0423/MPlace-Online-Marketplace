import { Response } from "express";
import AdModel from "../models/ad.model";
import { CatchAsyncErrors } from "../middleware/CatchAsyncErrors";

//create course
export const createAd = CatchAsyncErrors(
  async (data: any, res: any, next : any) => {
    const ad = await AdModel.create(data);
    res.status(201).json({
      success: true,
      ad,
    });
  }
);
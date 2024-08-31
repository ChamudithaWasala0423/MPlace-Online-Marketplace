import { Request, Response, NextFunction, response } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncErrors } from "../middleware/CatchAsyncErrors";
import AdModel from "../models/ad.model";
import cloudinary from "cloudinary"; //for upload media files to cloudinary
import { createAd } from "../services/ad.service";
import mongoose from "mongoose";
import notificationModel from "../models/notification.model";

//upload Ad
export const uploadAd = CatchAsyncErrors(
  async (req: Request, res: any, next: NextFunction) => {
    try {
      const data = req.body;
      const userId = req.user?._id;
      if (!userId) {
        return next(new ErrorHandler("User not found", 404));
      }

      const ImageOne = data.ImageOne;
      if (ImageOne) {
        const myCloud = await cloudinary.v2.uploader.upload(ImageOne, {
          folder: "Ads",
        });

        data.ImageOne = {
          url: myCloud.secure_url,
          cloudinary_id: myCloud.public_id,
        };
      }

      data.userId = userId;
      
      createAd(data, res, next);
    } catch (errors: any) {
      return next(new ErrorHandler(errors.message, 500));
    }
  }
);

//Edit Ad
export const editAd = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?._id;
      if (!userId) {
        return next(new ErrorHandler("User not found", 404));
      }

      const adId = req.params.id;
      const ad = await AdModel.findById(adId);
      if (!ad || ad.userId.toString() !== userId.toString()) {
        return next(
          new ErrorHandler("You are not authorized to edit this ad", 403)
        );
      }

      const data = req.body;

      const ImageOne = data.ImageOne;
      if (ImageOne) {
        await cloudinary.v2.uploader.destroy(ImageOne.public_id);

        const myCloud = await cloudinary.v2.uploader.upload(ImageOne, {
          folder: "Ads",
        });

        data.ImageOne = {
          url: myCloud.secure_url,
          cloudinary_id: myCloud.public_id,
        };
      }
      const updatedAd = await AdModel.findByIdAndUpdate(
        adId,
        { $set: data },
        { new: true }
      );

      res.status(200).json({
        success: true,
        updatedAd,
      });
    } catch (errors: any) {
      return next(new ErrorHandler(errors.message, 500));
    }
  }
);

//get single Ad - public
export const getSingleAd = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const adId = req.params.id;

      const ad = await AdModel.findById(adId);

      // console.log("hitting database");

      res.status(200).json({
        success: true,
        ad,
      });
    } catch (errors: any) {
      return next(new ErrorHandler(errors.message, 500));
    }
  }
);

// Get all ads for an authenticated user
export const getAdsByUser = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userAds = await AdModel.find({ userId: req.user?._id });

      if (!userAds || userAds.length === 0) {
        return next(new ErrorHandler("No ads found for this user", 404));
      }

      res.status(200).json({
        success: true,
        ads: userAds,
      });
    } catch (errors: any) {
      return next(new ErrorHandler(errors.message, 500));
    }
  }
);

//get all ads
export const getAllAds = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ads = await AdModel.find();

      res.status(200).json({
        success: true,
        ads,
      });
    } catch (errors: any) {
      return next(new ErrorHandler(errors.message, 500));
    }
  }
);

//delete Ad
export const deleteAd = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?._id;
      const { id } = req.params;

      const ad = await AdModel.findById(id);
      // Check if the ad exists and belongs to the authenticated user
      if (!ad || ad.userId.toString() !== userId?.toString()) {
        return next(
          new ErrorHandler("You are not authorized to delete this ad", 403)
        );
      }

      if (!ad) {
        return next(new ErrorHandler("Ad not found", 400));
      }

      await ad.deleteOne({ id });

      res.status(200).json({
        success: true,
        message: "Ad deleted successfully",
      });
    } catch (errors: any) {
      return next(new ErrorHandler(errors.message, 500));
    }
  }
);


//add question in Ad
interface IAddQuestion {
  question: string;
  adId: string;
}
export const addQuestion = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { question, adId}: IAddQuestion = req.body;
      const ad = await AdModel.findById(adId);

      if (!mongoose.Types.ObjectId.isValid(adId)) {
        return next(new ErrorHandler("Invalid content Id", 400));
      }
      //create a new question object
      const newQuestion: any = {
        user: req.user?.id,
        question,
        questionReplies: [],
      };

      //add this question to our course content
      ad?.questions.push(newQuestion);

      await notificationModel.create({
        user: req.user?._id,
        title: "New Question Resived",
        message: `You have successfully question in ${ad?.name}`,
      });

      //save the updated course
      await ad?.save();

      res.status(200).json({
        success: true,
        message: "Question added successfully",
        ad,
      });
    } catch (errors: any) {
      return next(new ErrorHandler(errors.message, 500));
    }
  }
);

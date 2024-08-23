import { Request, Response, NextFunction, response } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncErrors } from "../middleware/CatchAsyncErrors";
import mongoose from "mongoose";
import ejs from "ejs";
import path from "path";
import sendMail from "../utils/sendMail";
import AdModel from "../models/ad.model";
import cloudinary from "cloudinary";
import { createAd } from "../services/ad.service";


//upload Ad
export const uploadCourse = CatchAsyncErrors(
    async (req: Request, res: any, next: NextFunction) => {
      try {
        const data = req.body;
  
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

        const ImageTwo = data.ImageTwo;
        if (ImageTwo) {
          const myCloud = await cloudinary.v2.uploader.upload(ImageTwo, {
            folder: "Ads",
          });
          data.ImageTwo = {
            url: myCloud.secure_url,
            cloudinary_id: myCloud.public_id,
          };
        }

        const ImageThree = data.ImageThree;
        if (ImageThree) {
          const myCloud = await cloudinary.v2.uploader.upload(ImageThree, {
            folder: "Ads",
          });
          data.ImageThree = {
            url: myCloud.secure_url,
            cloudinary_id: myCloud.public_id,
          };
        }
  
        createAd(data, res, next);
      } catch (errors: any) {
        return next(new ErrorHandler(errors.message, 500));
      }
    }
  );
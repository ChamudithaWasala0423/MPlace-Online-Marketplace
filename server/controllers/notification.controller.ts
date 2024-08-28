import NotificationModel from "../models/notification.model";
import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncErrors } from "../middleware/CatchAsyncErrors";
import corn from "node-cron";

//get all notification for authenticated user
export const getNotifications = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?._id;
      if (!userId) {
        return next(new ErrorHandler("User not found", 404));
      }
      const notifcation = await NotificationModel.find().sort({
        createdAt: -1,
      }).where(userId);

      
      res.status(200).json({
        success: true,
        notifcation,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

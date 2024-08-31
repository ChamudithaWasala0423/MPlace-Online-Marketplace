"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotifications = void 0;
const notification_model_1 = __importDefault(require("../models/notification.model"));
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const CatchAsyncErrors_1 = require("../middleware/CatchAsyncErrors");
//get all notification for authenticated user
exports.getNotifications = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const userId = req.user?._id;
        if (!userId) {
            return next(new ErrorHandler_1.default("User not found", 404));
        }
        const notifcation = await notification_model_1.default.find().sort({
            createdAt: -1,
        }).where(userId);
        res.status(200).json({
            success: true,
            notifcation,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});

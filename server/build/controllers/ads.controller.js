"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addQuestion = exports.deleteAd = exports.getAllAds = exports.getAdsByUser = exports.getSingleAd = exports.editAd = exports.uploadAd = void 0;
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const CatchAsyncErrors_1 = require("../middleware/CatchAsyncErrors");
const ad_model_1 = __importDefault(require("../models/ad.model"));
const cloudinary_1 = __importDefault(require("cloudinary")); //for upload media files to cloudinary
const ad_service_1 = require("../services/ad.service");
const mongoose_1 = __importDefault(require("mongoose"));
const notification_model_1 = __importDefault(require("../models/notification.model"));
//upload Ad
exports.uploadAd = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const data = req.body;
        const userId = req.user?._id;
        if (!userId) {
            return next(new ErrorHandler_1.default("User not found", 404));
        }
        const ImageOne = data.ImageOne;
        if (ImageOne) {
            const myCloud = await cloudinary_1.default.v2.uploader.upload(ImageOne, {
                folder: "Ads",
            });
            data.ImageOne = {
                url: myCloud.secure_url,
                cloudinary_id: myCloud.public_id,
            };
        }
        data.userId = userId;
        (0, ad_service_1.createAd)(data, res, next);
    }
    catch (errors) {
        return next(new ErrorHandler_1.default(errors.message, 500));
    }
});
//Edit Ad
exports.editAd = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const userId = req.user?._id;
        if (!userId) {
            return next(new ErrorHandler_1.default("User not found", 404));
        }
        const adId = req.params.id;
        const ad = await ad_model_1.default.findById(adId);
        if (!ad || ad.userId.toString() !== userId.toString()) {
            return next(new ErrorHandler_1.default("You are not authorized to edit this ad", 403));
        }
        const data = req.body;
        const ImageOne = data.ImageOne;
        if (ImageOne) {
            await cloudinary_1.default.v2.uploader.destroy(ImageOne.public_id);
            const myCloud = await cloudinary_1.default.v2.uploader.upload(ImageOne, {
                folder: "Ads",
            });
            data.ImageOne = {
                url: myCloud.secure_url,
                cloudinary_id: myCloud.public_id,
            };
        }
        const updatedAd = await ad_model_1.default.findByIdAndUpdate(adId, { $set: data }, { new: true });
        res.status(200).json({
            success: true,
            updatedAd,
        });
    }
    catch (errors) {
        return next(new ErrorHandler_1.default(errors.message, 500));
    }
});
//get single Ad - public
exports.getSingleAd = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const adId = req.params.id;
        const ad = await ad_model_1.default.findById(adId);
        // console.log("hitting database");
        res.status(200).json({
            success: true,
            ad,
        });
    }
    catch (errors) {
        return next(new ErrorHandler_1.default(errors.message, 500));
    }
});
// Get all ads for an authenticated user
exports.getAdsByUser = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const userAds = await ad_model_1.default.find({ userId: req.user?._id });
        if (!userAds || userAds.length === 0) {
            return next(new ErrorHandler_1.default("No ads found for this user", 404));
        }
        res.status(200).json({
            success: true,
            ads: userAds,
        });
    }
    catch (errors) {
        return next(new ErrorHandler_1.default(errors.message, 500));
    }
});
//get all ads
exports.getAllAds = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const ads = await ad_model_1.default.find();
        res.status(200).json({
            success: true,
            ads,
        });
    }
    catch (errors) {
        return next(new ErrorHandler_1.default(errors.message, 500));
    }
});
//delete Ad
exports.deleteAd = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const userId = req.user?._id;
        const { id } = req.params;
        const ad = await ad_model_1.default.findById(id);
        // Check if the ad exists and belongs to the authenticated user
        if (!ad || ad.userId.toString() !== userId?.toString()) {
            return next(new ErrorHandler_1.default("You are not authorized to delete this ad", 403));
        }
        if (!ad) {
            return next(new ErrorHandler_1.default("Ad not found", 400));
        }
        await ad.deleteOne({ id });
        res.status(200).json({
            success: true,
            message: "Ad deleted successfully",
        });
    }
    catch (errors) {
        return next(new ErrorHandler_1.default(errors.message, 500));
    }
});
exports.addQuestion = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    try {
        const { question, adId } = req.body;
        const ad = await ad_model_1.default.findById(adId);
        if (!mongoose_1.default.Types.ObjectId.isValid(adId)) {
            return next(new ErrorHandler_1.default("Invalid content Id", 400));
        }
        //create a new question object
        const newQuestion = {
            user: req.user?.id,
            question,
            questionReplies: [],
        };
        //add this question to our course content
        ad?.questions.push(newQuestion);
        await notification_model_1.default.create({
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
    }
    catch (errors) {
        return next(new ErrorHandler_1.default(errors.message, 500));
    }
});

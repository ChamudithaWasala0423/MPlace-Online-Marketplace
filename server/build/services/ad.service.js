"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAd = void 0;
const ad_model_1 = __importDefault(require("../models/ad.model"));
const CatchAsyncErrors_1 = require("../middleware/CatchAsyncErrors");
//create course
exports.createAd = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (data, res, next, req) => {
    const ad = await ad_model_1.default.create(data);
    res.status(201).json({
        success: true,
        ad,
    });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoles = exports.isAuthenticated = void 0;
const CatchAsyncErrors_1 = require("./CatchAsyncErrors");
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
// Check if the user is authenticated or not
exports.isAuthenticated = (0, CatchAsyncErrors_1.CatchAsyncErrors)(async (req, res, next) => {
    const access_token = req.cookies.accessToken;
    if (!access_token) {
        return next(new ErrorHandler_1.default("Please login first to access this resource", 400));
    }
    const decoded = jsonwebtoken_1.default.verify(access_token, process.env.ACCESS_TOKEN);
    if (!decoded) {
        return next(new ErrorHandler_1.default("Access token is not valid", 400));
    }
    // Retrieve the user from MongoDB
    const user = await user_model_1.default.findById(decoded.id);
    if (!user) {
        return next(new ErrorHandler_1.default("User not found", 400));
    }
    req.user = user;
    next();
});
//validate user roles
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user?.role || "")) {
            return next(new ErrorHandler_1.default(`Role (${req.user?.role}) is not allowed to access this resource`, 403));
        }
        next();
    };
};
exports.authorizeRoles = authorizeRoles;

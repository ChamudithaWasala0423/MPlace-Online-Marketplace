"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
//get user by id
const getUserById = async (id, res) => {
    try {
        const userJson = await user_model_1.default.findById(id);
        if (userJson) {
            const user = JSON.parse(JSON.stringify(userJson));
            return res.status(200).json({
                success: true,
                user,
            });
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.getUserById = getUserById;

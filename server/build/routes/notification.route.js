"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notification_controller_1 = require("../controllers/notification.controller");
const auth_1 = require("../middleware/auth");
const notificationRouter = express_1.default.Router();
notificationRouter.get("/get-all-notifications", (0, auth_1.authorizeRoles)("user"), (req, res, next) => {
    (0, notification_controller_1.getNotifications)(req, res, next);
});

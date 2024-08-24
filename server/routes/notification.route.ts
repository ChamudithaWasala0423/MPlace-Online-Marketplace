import express from "express";
import {
  getNotifications,
} from "../controllers/notification.controller";
import { isAuthenticated, authorizeRoles } from "../middleware/auth";

const notificationRouter = express.Router();

notificationRouter.get(
  "/get-all-notifications",
  isAuthenticated,
  authorizeRoles("user"),
  (req: any, res: any, next: any) => {
    getNotifications(req, res, next);
  }
);
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ads_controller_1 = require("../controllers/ads.controller");
const auth_1 = require("../middleware/auth");
const adRouter = express_1.default.Router();
//upload Ad
adRouter.post("/upload-ad", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("user"), (req, res, next) => {
    (0, ads_controller_1.uploadAd)(req, res, next);
});
//Edit Ad
adRouter.put("/edit-ad/:id", auth_1.isAuthenticated, (req, res, next) => {
    (0, ads_controller_1.editAd)(req, res, next);
});
//get single ad - public
adRouter.get("/get-ad/:id", (req, res, next) => {
    (0, ads_controller_1.getSingleAd)(req, res, next);
});
//get all ad by user - authenticated
adRouter.get("/get-single-ad/:id", auth_1.isAuthenticated, (req, res, next) => {
    (0, ads_controller_1.getAdsByUser)(req, res, next);
});
//get all ads - public
adRouter.get("/get-ads", (req, res, next) => {
    (0, ads_controller_1.getAllAds)(req, res, next);
});
//delete ad
adRouter.delete("/delete-ad/:id", auth_1.isAuthenticated, (req, res, next) => {
    (0, ads_controller_1.deleteAd)(req, res, next);
});
//add question in course
adRouter.put("/add-question", auth_1.isAuthenticated, (req, res, next) => {
    (0, ads_controller_1.addQuestion)(req, res, next);
});
exports.default = adRouter;

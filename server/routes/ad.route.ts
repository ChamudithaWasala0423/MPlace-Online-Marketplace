import express from 'express';
import { 
    uploadAd,
    editAd,
    getSingleAd,
    getAdsByUser
 } from '../controllers/ads.controller';

import { authorizeRoles, isAuthenticated } from '../middleware/auth';

const adRouter = express.Router();

//upload Ad
adRouter.post("/upload-ad",isAuthenticated, authorizeRoles("user"), (req: any, res: any, next: any) => {
  uploadAd(req, res, next);
});


//Edit Ad
adRouter.put("/edit-ad/:id",isAuthenticated,  (req: any, res: any, next: any) => {
  editAd(req, res, next);
});

//get single ad - public
adRouter.get("/get-ad/:id",  (req: any, res: any, next: any) => {
    getSingleAd(req, res, next);
});

//get ad by user - authenticated
adRouter.get("/get-single-ad/:id",isAuthenticated,  (req: any, res: any, next: any) => {
    getAdsByUser(req, res, next);
});



export default adRouter;
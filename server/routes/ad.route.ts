import express from 'express';
import { 
    uploadAd
 } from '../controllers/ads.controller';

import { isAuthenticated } from '../middleware/auth';

const adRouter = express.Router();

//upload Ad
adRouter.post("/upload-ad",isAuthenticated, (req: any, res: any, next: any) => {
  uploadAd(req, res, next);
});

export default adRouter;
require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
export const app = express();

//body parser
app.use(express.json({limit: '50mb'}));



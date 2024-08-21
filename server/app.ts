require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
export const app = express();
import { ErrorMidleware } from './middleware/error';

//body parser
app.use(express.json({limit: '50mb'}));


app.use(ErrorMidleware);
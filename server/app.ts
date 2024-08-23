require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
export const app = express();
import { ErrorMidleware } from './middleware/error';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route';
import adRouter from './routes/ad.route';
import cors from 'cors';

//body parser
app.use(express.json({limit: '50mb'}));

//cookie parser
app.use(cookieParser(

));

//cors = Cross-Origin Resource Sharing (CORS)
app.use(cors({
    origin: process.env.ORIGIN
}));

//routes
app.use('/api/v1', userRouter, adRouter);


//testing api
app.get('/test', (req:Request, res:Response, next:NextFunction) => {
    res.status(200).json({
        success: true,
        message: 'Hello World!'
    });
});

//error handler
app.all("*", (req:Request, res:Response, next:NextFunction) => {
    const error = new Error(`Rout ${req.originalUrl} not found `);
    res.status(404);
    next(error);
});

app.use(ErrorMidleware);



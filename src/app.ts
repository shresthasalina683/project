import express, { NextFunction, Request, Response } from "express";
import { errorHandler } from "./middleware/errorHandle.middleware";
//@types/packageName

//creating app instance
const app = express();

//using middleware
app.use(express.json({ limit: "10mb"}));

//using routes

//health route
app.get("/", (req:Request, res:Response, next:NextFunction) => {
    res.status(200).json({
        message: "Server is up & runnig",
        success: true,
        status: "success",
        data: null,
    });
});

//path not found 
app.use((req:Request,res:Response,next:NextFunction)=>{
    const message = `Can not ${req.method} on ${req.path}`;

//     res.status(404).json({
//         message,
//         success: false,
//         status: "fail",
//         data: null,
//     });

const error: any = new Error(message);
error.status = "fail";
error.statusCode = 404;
next(error);
});

//using error handler
app.use(errorHandler);

export default app;
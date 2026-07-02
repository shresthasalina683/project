import express, { NextFunction, Request, Response } from "express";
//@types/packageName

//creating app instance
const app = express();

//using middleware

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

    res.status(404).json({
        message,
        success: false,
        status: "fail",
        data: null,
    });
});


export default app;
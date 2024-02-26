import { NextFunction, Request, Response } from "express";

export default (
  fn: (
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<Response<any> | void>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch((err) => {

      const errors: string[] = err.message ? err.message.split("-") : [];
      let status: number = 500;
      let message: string = "Unhandled error occurred";
      if(errors.length > 1) {
        status = parseInt(errors[0]);
        message = errors.slice(1,errors.length).join(" ");
      }else if(err.name === "ValidationError"){
        message = err.message;
      }else if(err.name === "MongoServerError"){
        if(err.message.includes("duplicate key error")) {
          status = 400;
          message = "Word is already available";
        }else {
          message = err.message;
        }
      }

      return res
        .status(status)
        .json({
          message
        });
    });
  };
};

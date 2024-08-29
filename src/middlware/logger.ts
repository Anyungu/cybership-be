import { NextFunction, Response, Request } from "express";

export const loggerMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  const { method, hostname, path } = req;
  console.log("Request received at:", new Date(), method, hostname, path, {
    page: req.query.page,
    size: req.query.size,
  });
  next();
};

import { NextFunction, Response, Request } from "express";
import { OrderQueryParams } from "../../../lib/types/types";
import { getOrdersService } from "../services/order";

export const getOrdersController = async (
  req: Request<unknown, unknown, unknown, OrderQueryParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { page, size } = req.query;

    let pageSkip = parseInt(page || "1", 10);
    const sizeSkip = parseInt(size || "50", 10);

    if (pageSkip < 1) {
      pageSkip = 1;
    }

    const skip = (pageSkip - 1) * sizeSkip;
    const take = sizeSkip;

    const data = await getOrdersService(skip, take);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

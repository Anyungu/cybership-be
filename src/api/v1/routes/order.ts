import express from "express";
import { getOrdersController } from "../controller/order";
import { loggerMiddleware } from "../../../middlware/logger";

export const orderRouter = express.Router();
orderRouter.use(loggerMiddleware);

orderRouter.route("/orders").get(getOrdersController);

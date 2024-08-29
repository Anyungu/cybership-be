import prisma from "../../../db/db";
import { Order } from "../../../lib/types/types";

export const getOrdersService = async (
  skip: number,
  take: number
): Promise<Order[]> => {
  try {
    const orders: Order[] = await prisma.order.findMany({
      skip,
      take,
    });
    return orders;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

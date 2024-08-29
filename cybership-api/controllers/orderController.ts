import { Request, Response } from "express";
import prisma from "../src/prismaClient";

export const getOrderData = async (req: Request, res: Response) => {
  console.log("inside the getOrderData");
  try {
    const orders = await prisma.order.findMany();
    console.log({ orders });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};

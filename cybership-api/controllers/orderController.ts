import { Request, Response } from "express";
import prisma from "../src/prismaClient";

export const getOrderData = async (req: Request, res: Response) => {
  // printing the controller in square brackets for easier tracing when the API suite grows...
  console.log("inside [controller] - getOrderData");
  try {
    const orders = await prisma.order.findMany();
    console.log(
      "inside [controller] - getOrderData - orders fetched from postgres",
      orders
    );
    res.status(200).json({
      status: "success",
      result: orders.length,
      data: orders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching data.",
    });
  }
};

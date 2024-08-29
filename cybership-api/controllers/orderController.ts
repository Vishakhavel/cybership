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

    // Remove the database ID from the returned data, UI won't need it.
    let modifiedOrderData = orders.map((order: any) => {
      let { orderId, customerName, status } = order;
      return {
        orderId,
        customerName,
        status,
      };
    });

    // return the modified data, along with the length and a success status
    res.status(200).json({
      status: "success",
      result: modifiedOrderData.length,
      data: modifiedOrderData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching data.",
    });
  }
};

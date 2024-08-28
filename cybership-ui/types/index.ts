export type OrderStatus = "ordered" | "shipping" | "fulfilled";

export type DataItem = {
  orderId: number;
  customerName: string;
  orderStatus: OrderStatus;
};

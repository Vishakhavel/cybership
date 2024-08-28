import React from "react";
import { OrderStatus } from "../../types";

import PendingIcon from "@mui/icons-material/Pending";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

// Define the props type
type IconForStatusProps = {
  status: OrderStatus; // Ensure 'status' prop is of type 'OrderStatus'
};

const IconForStatus: React.FC<IconForStatusProps> = ({ status }) => {
  switch (status) {
    case "Order Received":
      return <ReceiptLongIcon style={{ color: "green" }} />;
    case "Shipping":
      <LocalShippingIcon style={{ color: "yellow" }} />;
    case "Delivered":
      return <CheckCircleOutlineIcon style={{ color: "green" }} />;
    case "Cancelled":
      return <CancelIcon style={{ color: "red" }} />;
    default:
      return "";
  }
};

export default IconForStatus;

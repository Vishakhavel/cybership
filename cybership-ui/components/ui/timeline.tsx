"use client";
import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { OrderStatus } from "@/types";
import StatusLine from "@/components/ui/line";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

interface StatusProps {
  status: OrderStatus;
}

const Timeline: React.FC<StatusProps> = ({ status }) => {
  const statusArr = ["ordered", "shipping", "fulfilled"];

  return (
    <Container className="flex justify-center">
      <Box className="flex flex-col items-center">
        <ReceiptIcon
          color={statusArr.indexOf(status) >= 0 ? "success" : "disabled"}
        />
        <Typography
          sx={{
            color: statusArr.indexOf(status) >= 0 ? "green" : "disabled",
            fontSize: "14px",
          }}
        >
          ordered
        </Typography>
      </Box>

      <StatusLine
        color={statusArr.indexOf(status) >= 1 ? "green" : "grey"}
        width="100px"
      />

      <Box className="flex flex-col items-center">
        <LocalShippingIcon
          color={statusArr.indexOf(status) >= 1 ? "success" : "disabled"}
        />
        <Typography
          sx={{
            color: statusArr.indexOf(status) >= 1 ? "green" : "disabled",
            fontSize: "14px",
          }}
        >
          in transit
        </Typography>
      </Box>

      <StatusLine
        color={statusArr.indexOf(status) >= 2 ? "green" : "grey"}
        width="100px"
      />
      <Box className="flex flex-col items-center">
        <CheckCircleIcon
          color={statusArr.indexOf(status) >= 2 ? "success" : "disabled"}
        />
        <Typography
          sx={{
            color: statusArr.indexOf(status) >= 2 ? "green" : "disabled",
            fontSize: "14px",
          }}
        >
          fulfilled
        </Typography>
      </Box>
    </Container>
  );
};

export default Timeline;

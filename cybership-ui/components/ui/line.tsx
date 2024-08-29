import React from "react";
import { styled } from "@mui/material/styles";

// Define the props for the StatusLine component
interface StatusLineProps {
  color: "green" | "grey";
  width: string;
}

// Styled component for the line
const Line = styled("div")<StatusLineProps>(({ color, width, theme }) => ({
  height: "4px", // Adjust the line height as needed
  width: width, // Dynamic width based on props
  //   backgroundColor:
  backgroundColor: color === "green" ? "green" : "grey",
  margin: "10px 0", // Optional: Add some margin for spacing
}));

// Functional component to render the line
const StatusLine: React.FC<StatusLineProps> = ({ color, width }) => {
  return <Line className="mx-5" color={color} width={width} />;
};

export default StatusLine;

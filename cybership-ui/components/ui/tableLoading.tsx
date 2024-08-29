import React from "react";
import { TableRow, TableCell, LinearProgress } from "@mui/material";
import { join } from "path/win32";
const TableLoading = () =>
  [1, 2, 3, 4, 5].map((_, rowIndex) => {
    return (
      <TableRow key={`row-${rowIndex}`}>
        {[1, 2, 3].map((_, cellIndex) => {
          return (
            <TableCell key={`cell-${rowIndex}-${cellIndex}`}>
              <LinearProgress color="success" />
            </TableCell>
          );
        })}
      </TableRow>
    );
  });
export default TableLoading;

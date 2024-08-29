import React from "react";
import { TableRow, TableCell, LinearProgress } from "@mui/material";
const TableLoading = () =>
  [1, 2, 3, 4, 5].map((_) => {
    return (
      <TableRow>
        {[1, 2, 3].map((_) => {
          return (
            <TableCell>
              <LinearProgress color="success" />
            </TableCell>
          );
        })}
      </TableRow>
    );
  });
export default TableLoading;

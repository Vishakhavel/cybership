"use client";

import React, { useState, useEffect } from "react";
import "../../globals.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Box,
} from "@mui/material";

import TableLoading from "@/components/ui/tableLoading";

import axios from "axios";

import { Typography } from "@mui/material";
import Layout from "@/components/layout";
import Timeline from "@/components/ui/timeline";
import { OrderStatus } from "@/types";

interface TableRowData {
  orderId: number;
  customerName: string;
  status: OrderStatus;
}

const dummyData: TableRowData[] = [
  { orderId: 1, customerName: "John Doe", status: "ordered" },
  { orderId: 2, customerName: "Jane Smith", status: "shipping" },
  { orderId: 3, customerName: "Alice Johnson", status: "fulfilled" },
  { orderId: 1, customerName: "John Doe", status: "ordered" },
  {
    orderId: 2,
    customerName: "Jane Smith",
    status: "shipping",
  },
  { orderId: 3, customerName: "Alice Johnson", status: "fulfilled" },
  { orderId: 1, customerName: "John Doe", status: "ordered" },
  { orderId: 2, customerName: "Jane Smith", status: "shipping" },
  { orderId: 3, customerName: "Alice Johnson", status: "fulfilled" },
  { orderId: 1, customerName: "John Doe", status: "ordered" },
];

const TableComponent: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState<any[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect to make the API call on page load
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Set loading to true at the start of the request
        setLoading(true);

        // NOTE : Commenting out this code, and usingg the dummy API call from API gateway. Uncomment the axios get and the setDate funtion to use the response from the DB, from express server.
        // const response = await axios.get(
        //   "http://localhost:3001/api/fulfillments"
        // );
        // setData(response.data.data);

        // NOTE - dummy API call from AWS API Gateway

        const response = await fetch(
          "https://uh4efu4gp8.execute-api.us-east-2.amazonaws.com/default/cybership-dummy-api",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let responseJson = await response.json();
        setData(responseJson.data);
      } catch (error) {
        // Handle error if API call fails
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        // Set loading to false after the request completes
        setLoading(false);
      }
    };

    // Call fetchData function
    fetchData();
  }, []); // Empty dependency array ensures this runs once when component mounts

  useEffect(() => {
    // Compute the rows to display based on the current page and rowsPerPage
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setRows(data.slice(startIndex, endIndex));
  }, [page, rowsPerPage, data]);

  // Event handler for changing the page
  const handleChangePage = (
    event: React.MouseEvent | null,
    newPage: number
  ): void => {
    setPage(newPage);
  };

  // Event handler for changing the number of rows per page
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10)); // Ensure value is parsed as an integer
    setPage(0); // Reset page when rows per page changes
  };

  return (
    <Layout>
      <TableContainer component={Paper} className="mx-auto my-auto w-full">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-bold w-1/6" align="center">
                <Typography variant="h5">Order ID</Typography>
              </TableCell>
              <TableCell align="center" className="font-bold w-1/3">
                <Typography variant="h5">Customer Name</Typography>
              </TableCell>

              <TableCell align="center" className="font-bold ">
                <Typography variant="h5">Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableLoading />
            ) : error ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <Typography color="error">Error: {error}</Typography>
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <TableRow key={row.orderId}>
                  <TableCell align="center">{row.orderId}</TableCell>
                  <TableCell align="center">{row.customerName}</TableCell>
                  <TableCell align="center">
                    <Timeline status={row.status} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 50]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Layout>
  );
};

export default TableComponent;

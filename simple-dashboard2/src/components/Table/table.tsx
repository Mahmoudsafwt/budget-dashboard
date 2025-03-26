import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Transaction } from "../../utils/dataofSpecificMonth";

interface Props {
  state: Transaction[];
}

const BasicTable: React.FC<Props> = ({ state }) => {
  const rows: Transaction[] = state;
  const [page, setPage] = useState<number>(0);
  const rowsPerPage: number = 10;
  const totalPages: number = Math.ceil(rows.length / rowsPerPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage - 1);
  };

  const displayedRows: Transaction[] = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box
      sx={{
        width: "49%",
        display: "inline-block",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          marginTop: 2,
          borderRadius: 6,
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="basic table">
          <TableHead>
            <TableRow>
              <TableCell>Payee</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.length > 0 ? (
              displayedRows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.payee}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.category}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <Typography variant="h6" color="textSecondary">
                    No transactions available
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {totalPages > 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 2,
              gap: 1,
            }}
          >
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                variant={page === index ? "contained" : "outlined"}
                onClick={() => handlePageChange(index + 1)}
                sx={{
                  minWidth: 40,
                  backgroundColor: page === index ? "#4235b0" : "transparent",
                  color: page === index ? "white" : "#4235b0",
                  "&:hover": {
                    backgroundColor:
                      page === index ? "#352a8c" : "rgba(66, 53, 176, 0.1)",
                  },
                }}
              >
                {index + 1}
              </Button>
            ))}
          </Box>
        )}
      </TableContainer>
    </Box>
  );
};

export default BasicTable;

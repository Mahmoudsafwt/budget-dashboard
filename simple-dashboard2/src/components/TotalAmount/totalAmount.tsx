import React from "react";
import { Box } from "@mui/material";

interface TotalAmountProps {
  amount: number;
}

const TotalAmount: React.FC<TotalAmountProps> = ({ amount = 0 }) => {
  return (
    <Box
      sx={{
        width: "90%",
        height: "70px",
        backgroundColor: "white",
        borderRadius: 4,
      
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <h4 style={{ color: "#bec3cc",margin:10 }}>TOTAL SPENT THIS MONTH</h4>
      <h1 style={{ display: "inline-block", color: "black" }}>
        ${amount || 0}
      </h1>
    </Box>
  );
};

export default TotalAmount;

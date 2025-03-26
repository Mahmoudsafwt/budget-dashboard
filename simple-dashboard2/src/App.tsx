import React, { useState } from "react";
import ChartDisplaying from "./components/Chart/chart";
import Header from "./components/Header/header";
import BasicTable from "./components/Table/table";
import TotalAmount from "./components/TotalAmount/totalAmount";
import MonthSlider from "./components/Header/MonthSlider/monthSlider";
import { Transaction } from "./utils/dataofSpecificMonth";
import { Box, Grid } from "@mui/material";

const App: React.FC = () => {
  const [state, setState] = useState<Transaction[]>([]); // ✅ Default to empty array
  const [amount, setAmount] = useState<number>(0); // ✅ Always a number

  return (
    <Box>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 2 }}
      >
        <Grid item xs={3}>
          <Header />
        </Grid>

        <Grid item xs={6} display="flex" justifyContent="center">
          <MonthSlider setState={setState} setAmount={setAmount} />
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
      <TotalAmount amount={amount} />
      <Box display={"flex"} sx={{ ml: 7 }}>
        <ChartDisplaying state={state} />
        <BasicTable state={state} />
      </Box>
    </Box>
  );
};

export default App;

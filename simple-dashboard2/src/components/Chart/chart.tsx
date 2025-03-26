import { Box } from "@mui/material";
import { Transaction } from "../../utils/dataofSpecificMonth";
import { Chart } from "react-google-charts";

type Props = {
  state: Transaction[];
};

const ChartDisplaying: React.FC<Props> = ({ state }) => {
  console.log("Data received by Chart:", state);

  const pieData =
    state && state.length > 0
      ? [
          ["Category", "Amount"],
          ...state.map(({ category, amount }) => [category, amount]),
        ]
      : [
          ["Category", "Amount"],
          ["No Data", 1],
        ];

  console.log("Pie Chart Data:", pieData);

  return (
    <Box
      display="inline-block"
      justifyContent="center"
      alignItems="center"
      width="40%"
      sx={{
        borderRadius: "20px",
        backgroundColor: "white",
        padding: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        margin: 3,
      }}
    >
      <Chart
        style={{ color: "red" }}
        chartType="PieChart"
        data={pieData}
        options={{
          title:
            state.length > 0 ? "Expenses Breakdown" : "No Expenses Available",
          pieHole: 0.4,
          is3D: false,
          legend: { position: "bottom" },
          slices: state.length === 0 ? { 0: { color: "#d3d3d3" } } : {},
        }}
        width="100%"
        height="400px"
      />
    </Box>
  );
};

export default ChartDisplaying;

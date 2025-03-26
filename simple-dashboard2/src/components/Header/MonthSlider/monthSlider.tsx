// import { useEffect, useState } from "react";
// import "./monthSlider.css";
// import { Box, Button, Typography } from "@mui/material";
// import dataForSpecificMonth from "../../../utils/dataofSpecificMonth";
// import calculateAmount from "../../../utils/amountOfSpecificMonth";
// import { Transaction } from "../../../utils/dataofSpecificMonth";

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const years = [2023, 2024, 2025];

// const monthYearData = years.flatMap((year) =>
//   months.map((month) => `${month} ${year}`)
// );

// type Props = {
//   setState: React.Dispatch<React.SetStateAction<Transaction[]>>;
//   setAmount: React.Dispatch<React.SetStateAction<number>>;
// };

// const MonthSlider: React.FC<Props> = ({ setState, setAmount }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % monthYearData.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + monthYearData.length) % monthYearData.length
//     );
//   };

//   useEffect(() => {
//     const [currentMonth, currentYear] = monthYearData[currentIndex].split(" ");
//     const convertCurrentYear = +currentYear;

//     const data = dataForSpecificMonth(currentMonth, convertCurrentYear);
//     console.log(currentMonth, currentYear);

//     setState(data);

//     const amount = calculateAmount(currentMonth, convertCurrentYear);
//     setAmount(+amount);
//   }, [currentIndex, setState, setAmount]);

//   return (
//     <Box
//       sx={{
//         display: "inline-block",
//         justifyContent: "center",
//         textAlign: "center",
//         mt: 5,
//       }}
//     >
//       <Button
//         sx={{ fontSize: 30, color: "#4235b0", paddingLeft: 3, paddingRight: 3 }}
//         className="prev"
//         onClick={handlePrev}
//       >
//         {"<<"}
//       </Button>
//       <Typography
//         variant="h2"
//         sx={{
//           color: "#4235b0",
//           fontWeight: "bold",
//           mx: 2,
//           display: "inline-block",
//         }}
//       >
//         {monthYearData[currentIndex]}
//       </Typography>
//       <Button sx={{ fontSize: 30, color: "#4235b0" }} onClick={handleNext}>
//         {">>"}
//       </Button>
//     </Box>
//   );
// };

// export default MonthSlider;
import { useEffect, useState } from "react";
import "./monthSlider.css";
import { Box, Button, Typography } from "@mui/material";
import dataForSpecificMonth from "../../../utils/dataofSpecificMonth";
import calculateAmount from "../../../utils/amountOfSpecificMonth";
import { Transaction } from "../../../utils/dataofSpecificMonth";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = [2023, 2024, 2025];

const monthYearData = years.flatMap((year) =>
  months.map((month) => `${month} ${year}`)
);

type Props = {
  setState: React.Dispatch<React.SetStateAction<Transaction[]>>;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

const MonthSlider: React.FC<Props> = ({ setState, setAmount }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % monthYearData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + monthYearData.length) % monthYearData.length
    );
  };

  useEffect(() => {
    const [currentMonth, currentYear] = monthYearData[currentIndex].split(" ");
    const convertCurrentYear = +currentYear;

    const data = dataForSpecificMonth(currentMonth, convertCurrentYear);
    setState(data);

    const amount = calculateAmount(currentMonth, convertCurrentYear);
    setAmount(+amount);
  }, [currentIndex, setState, setAmount]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Button
        sx={{ fontSize: 30, color: "#4235b0", paddingLeft: 3, paddingRight: 3 }}
        className="prev"
        onClick={handlePrev}
      >
        {"<<"}
      </Button>
      <Box
        sx={{
          width: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#4235b0",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            overflow: "visible",
            textAlign: "center",
          }}
        >
          {monthYearData[currentIndex]}
        </Typography>
      </Box>
      <Button sx={{ fontSize: 30, color: "#4235b0" }} onClick={handleNext}>
        {">>"}
      </Button>
    </Box>
  );
};

export default MonthSlider;


import { Line } from "react-chartjs-2";

const SpendingChart = () => {
  return (
    <Line
      options={{
        scales: {
          xAxes: {
            axis: "x",
            stacked: true,
          },
          yAxes: {
            axis: "y",
            stacked: true,
          },
        },
      }}
      data={{
        labels: ["1/9/2021", "2/9/2021", "3/9/2021", "4/9/2021", "5/9/2021", "6/9/2021"],
        datasets: [
          {
            label: "living",
            fill: "green",
            data: [1, 2, 1, 4, 3, 2],
            borderColor: "green",
          },
          {
            label: "rent",
            data: [0, 2, 0, 1, 0, 3],
          },
          {
            label: "treats",
            data: [0, 0, 4, 0, 0, 4],
          },
          {
            label: "flat",
            data: [0, 1, 0, 0, 1, 0],
          },
          {
            label: "fuel",
            data: [0, -5, 10, -5, 0, 0],
          },
          {
            label: "other",
            data: [0, 0, 0, 13, 0, 0],
          },
        ],
      }}
    />
  );
};

export default SpendingChart;

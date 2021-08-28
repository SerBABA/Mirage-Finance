import React from "react";
import { Bar } from "react-chartjs-2";
import ChartWrapper from "./DistributionChart";

import { sampleData, Category, singleSad } from "../../hooks/useMultileSad";

export default function DistrbutionChart() {
  const categories: string[] = Object.values(Category);
  const data: number[] = [];

  for (let i = 0; i < categories.length; i++) {
    data.push(
      sampleData.reduce((prev: number, next: singleSad) => {
        if (next.category === categories[i]) {
          return prev + next.amount;
        }
        return prev;
      }, 0)
    );
  }

  return (
    <ChartWrapper>
      <Bar
        data={{
          labels: categories,
          datasets: [
            {
              label: "Values",
              data,
            },
          ],
        }}
      />
    </ChartWrapper>
  );
}

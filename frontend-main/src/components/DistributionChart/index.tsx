import { Bar } from 'react-chartjs-2';

import { sampleData, Category, singleSad } from '../../hooks/useMultileSad';

export const DistrbutionChart = () => {
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
    <div>
      <Bar
        data={{
          labels: categories,
          datasets: [
            {
              label: 'Values',
              data,
            },
          ],
        }}
      />
    </div>
  );
};

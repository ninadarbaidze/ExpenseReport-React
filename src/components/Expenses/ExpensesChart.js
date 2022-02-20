import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
//Created list of objects to populate chart with label, and value
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

//looping through each filtered expenses element and add ChartDataPoint filtered element's amount. If it encountered same month twice, it will be summed.
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 > Jan = 0
    chartDataPoints[expenseMonth].value += expense.amount;
  };

  //sending populated chartDataPoints to Chart.
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
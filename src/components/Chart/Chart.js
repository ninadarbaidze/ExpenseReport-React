import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  //List all the DataPoint values in list. it will give us an array of values. 
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); 
  //calculated maximum expenses in concrete month
  const totalMaximum = Math.max(...dataPointValues); 

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

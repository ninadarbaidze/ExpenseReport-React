
import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  //It's wrapped in '' because it must be added as css value.
  let barFillHeight = '0%';

  //Calculate chart bar heigh for css elements.
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          //first{} is for JSX dynamic value, second one is object for css.
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
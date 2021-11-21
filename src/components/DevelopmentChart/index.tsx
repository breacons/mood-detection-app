import React, { useState, useEffect } from 'react';
import { TinyArea } from '@ant-design/charts';

export const DevelopmentChart = () => {
  const data = [
    264,
    417,
    438,
    887,
    309,
    397,
    550,
    575,
    563,
    430,
    525,
    592,
    492,
    467,
    513,
    546,
    983,
    340,
    539,
    243,
    226,
    192,
  ];
  const config = {
    height: 60,
    autoFit: false,
    data,
    smooth: true,
    color: 'transparent'
    // areaStyle: {
    //   fill: 'red',
    //   fillOpacity: 0.5,
    //   // stroke: 'black',
    //   lineWidth: 1,
    //   lineDash: [4, 5],
    //   strokeOpacity: 0.7,
    //   // shadowColor: 'black',
    //   shadowBlur: 10,
    //   shadowOffsetX: 5,
    //   shadowOffsetY: 5,
    //   // cursor: 'pointer'
    // }
  };
  return <TinyArea {...config} />;
};

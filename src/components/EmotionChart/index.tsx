import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Line, Area } from '@ant-design/charts';
import { useSelector } from 'react-redux';
import { selectEmotionsHistory, selectLastEmotion } from '../../state/reducers/emotionsReducer';
import _ from 'lodash';
import dayjs from 'dayjs';

const emotionCategories = ['angry', 'happy','neutral'];

export const EmotionChart = () => {
  const emotions = useSelector(selectEmotionsHistory);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   asyncFetch();
  // }, []);

  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };

  const data = useMemo(() => {
    return _.flatten(
      emotions
        .slice(Math.max(emotions.length - 20, 1))
        .map((item) =>
          emotionCategories.map((category) => ({
            category,
            value: (item as any).emotion[category],
            time: dayjs.unix(item.time).format('HH:mm:ss'),
          })),
        ),
    );
  }, [emotions]);

  console.log(data);

  const config = {
    data,
    height: 334,
    xField: 'time',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      tickCount: 8
      // type: 'time',
      // min: _.first(data)?.time || 0,
      // max: _.last(data)?.time || 1
    },
    smooth: true,
    animation: false,
    tooltip: {
      position: 'right' as any
    },
    legend: {
      position: 'top' as any,
      label: {
        style: {
          color: 'white',
          fill: 'white',
          fillOpacity: 1,
          opacity: 1
        }
      }
    },
    yAxis: {
      min: 0,
      max: 1,
      // label: {
      //   formatter: (v: string) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      // },
    },
  };

  return <Area {...config} />;
};

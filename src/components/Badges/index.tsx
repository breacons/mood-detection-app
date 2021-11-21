import React from 'react';
import badge1 from '../../assets/badge_1.svg';
import badge2 from '../../assets/badge_2.svg';
import badge3 from '../../assets/badge_3.svg';
import badge4 from '../../assets/badge_4.svg';
import badge5 from '../../assets/badge_5.svg';
import badge6 from '../../assets/badge_6.svg';
import { Space } from 'antd';

const badges = [badge1, badge2, badge3, badge4, badge5, badge6];

export const Badges = () => {
  return (
    <Space direction="horizontal" size={12}>
      {badges.map((badge) => (
        <img src={badge} key={badge} style={{width: 24}}/>
      ))}
    </Space>
  );
};

export default Badges;

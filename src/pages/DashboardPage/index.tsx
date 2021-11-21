import React from 'react';
import { Alert, Button, Card, Col, Row, Space, Statistic, Timeline, Typography } from 'antd';
import { Line } from '@ant-design/charts';

import VideoFeed from '../../components/VideoFeed';
import { useSelector } from 'react-redux';
import { selectLastEmotion } from '../../state/reducers/emotionsReducer';
import { BounceLoader } from 'react-spinners';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { EmotionChart } from '../../components/EmotionChart';
import Status from '../../components/Status';

export const DashboardPage = () => {
  return (
    <div>
      <Typography.Title>Dashboard</Typography.Title>

      <Row gutter={24}>
        <Col span={18}>
          <Space direction="vertical" size={24}>
            <Row gutter={24}>
              <Col span={10}>
                <VideoFeed />
              </Col>
              <Col span={14}>
                <Card>
                  <EmotionChart />
                </Card>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Card title="Internal System Status" extra={<a href="#">Report</a>}>
                  <Status />
                </Card>
              </Col>
              <Col span={10}>
                <Alert
                  message="Messages blocked"
                  description="The sent messaged contained hateful words."
                  type="error"
                  showIcon
                />
                <Card title="Account Status">
                  <Space direction="vertical" size={12}>
                    <Alert
                      message="Messages blocked"
                      description="The sent messaged contained hateful words."
                      type="error"
                      showIcon
                    />
                    <Alert
                      message="Messages allowed"
                      description="Detailed description and advice about successful copywriting."
                      type="success"
                      showIcon
                    />
                  </Space>
                </Card>
              </Col>
              <Col span={6}>
                <Space direction="vertical" size={24} style={{ width: '100%' }}>
                  <Card>
                    <Statistic
                      title="Blocked messages"
                      value={9.3}
                      precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  </Card>
                  <Card>
                    <Statistic
                      title="Blocked messages"
                      value={9.3}
                      precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  </Card>
                </Space>
              </Col>
            </Row>
          </Space>
        </Col>
        <Col span={6}>
          <Card title="Default size card">
            <Timeline>
              <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="red">
                <p>Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
            </Timeline>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;

import React from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Row,
  Space,
  Statistic,
  Timeline,
  Typography,
  List,
  Avatar,
  Divider,
  Layout,
  Tag,
} from 'antd';

import VideoFeed from '../../components/VideoFeed';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { EmotionChart } from '../../components/EmotionChart';
import Status from '../../components/Status';
import If from '../../components/If';
import { DevelopmentChart } from '../../components/DevelopmentChart';
import Badges from '../../components/Badges';
import { useAppSelector } from '../../state/hooks';
import profileImage from './images/profile.jpg';
import { Logs } from './Logs';

const { Header, Content, Footer } = Layout;

export const DashboardPage = () => {
  const isAccountBlocked = useAppSelector((state) => state.ui.isBlocked);

  return (
    <Layout className="layout">
      <Content style={{ padding: '20px 50px' }}>
        <Space direction="horizontal" size={12}>
          <Typography.Title>System Internal Operations</Typography.Title>
          <Typography.Text code>v1.45.34-2</Typography.Text>
          <Tag color="success">stable</Tag>
        </Space>

        <Row gutter={24}>
          <Col span={18}>
            <Space direction="vertical" size={24} style={{ width: '100%' }}>
              <Row gutter={24}>
                <Col span={14}>
                  <VideoFeed />
                </Col>
                <Col span={10}>
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
                  <Card title="Gamer Profile" extra={<Badges />}>
                    <List.Item.Meta
                      avatar={<Avatar src={profileImage} />}
                      title={<a href="https://ant.design">Gregorio Maximus</a>}
                      description="Member since 2018"
                    ></List.Item.Meta>
                    <Divider />
                    <DevelopmentChart />
                    <Typography.Text
                      type="secondary"
                      style={{ textAlign: 'center', width: '100%', display: 'block' }}
                    >
                      Personal Development
                    </Typography.Text>
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
            <Space direction="vertical" size={24}>
              <If
                condition={isAccountBlocked}
                then={() => (
                  <Alert
                    message="Messages blocked"
                    description="The user is temporarily blocked form sending new messages into the chat."
                    type="error"
                    showIcon
                    // icon={<div style={{marginRight: 14}}><ClockLoader size={18} color={'#a61d24'}/></div>}
                  />
                )}
                else={() => (
                  <Alert
                    message="Messages allowed"
                    description="Detailed description and advice about successful copywriting."
                    type="success"
                    showIcon
                  />
                )}
              />

              <Logs />
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default DashboardPage;

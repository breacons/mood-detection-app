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
} from 'antd';

import VideoFeed from '../../components/VideoFeed';
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import {EmotionChart} from '../../components/EmotionChart';
import Status from '../../components/Status';
import If from '../../components/If';
import {DevelopmentChart} from '../../components/DevelopmentChart';
import Badges from '../../components/Badges';
import {useAppSelector} from '../../state/hooks';

const {Header, Content, Footer} = Layout;

export const DashboardPage = () => {
  const isAccountBlocked = useAppSelector((state) => state.ui.isBlocked);

  return (
    <Layout className="layout">
      <Content style={{padding: '0 50px'}}>
        <Typography.Title>Dashboard</Typography.Title>

        <Row gutter={24}>
          <Col span={18}>
            <Space direction="vertical" size={24} style={{width: '100%'}}>
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
                      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                      title={<a href="https://ant.design">Gregorio Maximus</a>}
                      description="Member since 2018"
                    ></List.Item.Meta>
                    <Divider />
                    <DevelopmentChart />
                    <Typography.Text
                      type="secondary"
                      style={{textAlign: 'center', width: '100%', display: 'block'}}
                    >
                      Personal Development
                    </Typography.Text>
                  </Card>
                </Col>
                <Col span={6}>
                  <Space direction="vertical" size={24} style={{width: '100%'}}>
                    <Card>
                      <Statistic
                        title="Blocked messages"
                        value={9.3}
                        precision={2}
                        valueStyle={{color: '#cf1322'}}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                      />
                    </Card>
                    <Card>
                      <Statistic
                        title="Blocked messages"
                        value={9.3}
                        precision={2}
                        valueStyle={{color: '#cf1322'}}
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

              <Card title="Gamer History">
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
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default DashboardPage;

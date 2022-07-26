import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss';
import { Typography, Row, Col, Button, Card, Space, Form, Input } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const Home: NextPage = () => {
  return (
    <div className='mb-10'>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.homeSection1 + ' px-36'}>
        <Col span={24} className='pt-40'>
          <Row>
            <Col className="gutter-row self-center" span={10}>
              <Title className='font-white'>We make easier solutions for YOU</Title>
              <Paragraph className='font-white'>
                We make tools that solve our clients' needs and concerns,
                such as monitoring, analyzing, and interpreting data. We see to it
                that our clients' interests are prioritized and that the best service
                is present in every interaction.
              </Paragraph>
              <Button className='gold-bg mt-2 drop-shadow-lg' type="primary" shape="round" size={'large'}>
                Call Us Now
              </Button>
            </Col>
            <Col span={14}>
              <div className="grid justify-items-stretch">
                <div className="justify-self-center">
                  <img width={600} src='../assets/img-banner-1.png' alt="img-banner" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24} className='mt-56'>
          <Row>
            <Col span={12} className='gutter-row mt-72'>
              <Row>
                <Col span={24}>
                  <Title className='font-aquila-color-3'>Why Us?</Title>
                  <Paragraph className='font-neutral-gray-color-2'>
                    We are a team of experts. We use our combined skills and experience to create
                    extremely reliable software tailored to your special business' needs.
                  </Paragraph>
                  <Button className='gold-bg mt-2 drop-shadow-lg' type="primary" shape="round" size={'large'}>
                    Get a Quote
                  </Button>
                </Col>
                <Col span={24} className='mt-16'>
                  <div className="grid justify-items-stretch">
                    <div className="justify-self-center">
                      <img width={350} src='../assets/img-banner-2.png' alt="img-banner" />
                    </div>
                  </div>
                </Col>
                <Col span={24} className='mt-80'>
                  <Title className='font-aquila-color-3'>Our Products?</Title>
                  <Paragraph className='font-neutral-gray-color-2'>
                    By establishing a simple and easy-to-use medical software, we will pave the path for the
                    development of global medical systems.
                  </Paragraph>
                </Col>
              </Row>
            </Col>
            <Col span={12} className='gutter-row'>
              <Row>
                <Col span={24}>
                  <Space size={30} className='p-10 flex' direction="vertical">
                    <Card className='border-radius-50 drop-shadow-xl neutral-gray-color-3-bg' size='small'>
                      <Title level={4} className='font-aquila-color-3'>Stable</Title>
                      <Paragraph className='font-neutral-gray-color-2'>
                        We ensure that our applications are 100% stable and are above standards.
                      </Paragraph>
                    </Card>
                    <Card className='border-radius-50 drop-shadow-xl neutral-gray-color-3-bg' size='small'>
                      <Title level={4} className='font-aquila-color-3'>Efficient</Title>
                      <Paragraph className='font-neutral-gray-color-2'>
                        We make use of cutting-edge technologies to make our apps efficient and effective.
                      </Paragraph>
                    </Card>
                    <Card className='border-radius-50 drop-shadow-xl neutral-gray-color-3-bg' size='small'>
                      <Title level={4} className='font-aquila-color-3'>Innovative</Title>
                      <Paragraph className='font-neutral-gray-color-2'>
                        We want to pave the way in developing new tools for each business.
                      </Paragraph>
                    </Card>
                  </Space>
                </Col>
                <Col span={24} className='p-10'>
                  <Card className='border-radius-50 drop-shadow-2xl blurry-bg' size='small'>
                    <Title className='text-center font-aquila-color-3'>Subscribe to our NEWSLETTER</Title>
                    <Form
                      name="basic"
                      initialValues={{ remember: true }}
                      autoComplete="off"
                      className='px-6'
                    >
                      <Form.Item name="username">
                        <Input placeholder='Name' className='py-3 rounded-full' />
                      </Form.Item>

                      <Form.Item name="contact">
                        <Input placeholder='Contact' className='py-3 rounded-full' />
                      </Form.Item>

                      <Form.Item name="email">
                        <Input placeholder='Email' className='py-3 rounded-full' />
                      </Form.Item>

                      <Form.Item name="address">
                        <Input placeholder='Address' className='py-3 rounded-full' />
                      </Form.Item>

                      <Form.Item>
                        <Button
                          block
                          type="primary"
                          htmlType="submit"
                          className='gold-bg rounded-full h-12 drop-shadow-lg'
                        >
                          Book a Call
                        </Button>
                      </Form.Item>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.homeSection2 + ' px-36'}>
        <Col span={24} className='mb-44'>
          <Row>
            <Col span={12}>
              <div className="grid justify-items-stretch">
                <div className="justify-self-center">
                  <img width={400} src='../assets/product-1.png' alt="img-banner" />
                </div>
              </div>
            </Col>
            <Col className="gutter-row self-center" span={12}>
              <Title className='font-aquila-color-3'>Aquila Clinic System</Title>
              <Paragraph className='font-neutral-gray-color-2'>
                Is a software tailored to handle day-to-day tasks in the clinic and handle
                clinic bookings efficiently. It is powered with the latest technology stack
                and tools making it highly reliable.
              </Paragraph>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col className="gutter-row self-center" span={12}>
              <Title className='font-aquila-color-3'>IVF Lab System</Title>
              <Paragraph className='font-neutral-gray-color-2'>
                This is a tool that handles patient records and fertilization processes. It is a
                customized software for a very specific need.
              </Paragraph>
            </Col>
            <Col span={12}>
              <div className="grid justify-items-stretch">
                <div className="justify-self-center">
                  <img width={400} src='../assets/product-2.png' alt="img-banner" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Home

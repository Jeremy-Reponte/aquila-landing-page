import React from 'react';
import type { NextPage } from 'next';
import { Typography, Row, Col, Button, Card, Space } from 'antd';
import Image from 'next/image';
import { CheckOutlined } from '@ant-design/icons';
import styles from '../styles/Pricing.module.scss';
import banner5 from '../public/assets/img-banner-5.png';

const { Title, Paragraph, Text } = Typography;

const Pricing: NextPage = () => {
    return (
        <div className='mb-10'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.pricingSection1 + ' px-36 mb-44'}>
                <Col span={24} className='pt-44'>
                    <Row>
                        <Col span={24} className='mb-72'>
                            <Row>
                                <Col className="gutter-row self-center" span={10}>
                                    <Title className='font-white'>Think About the Value You&rsquo;re Getting</Title>
                                    <Paragraph className='font-white'>
                                        We are proud to say that the value you get from our product is way greater than the price.
                                        In fact, we are one of the most affordable software in the market.
                                    </Paragraph>
                                    <Button className='gold-bg mt-2 drop-shadow-lg' type="primary" shape="round" size={'large'}>
                                        Call Us Now
                                    </Button>
                                </Col>
                                <Col span={14}>
                                    <div className="grid justify-items-stretch">
                                        <div className="justify-self-center">
                                            <Image width={700} height={590} src={banner5} alt="img-banner" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} className={styles.featureSection + ' gutter-row mt-80 mb-24'}>
                            <Row>
                                <Col offset={3} span={18} className="mt-18">
                                    <Title className='font-aquila-color-3 w-3/4'>Aquila Clinic System(ACS) Product Pricing</Title>
                                    <Paragraph className='font-neutral-gray-color-2'>
                                        We made sure that our product value is always greater than our product price. Feel free to shoot us a
                                        message here for more inquiries.
                                    </Paragraph>
                                </Col>
                                <Col offset={3} span={18} className="mt-20">
                                    <Card className='drop-shadow-2xl blurry-bg p-3'>
                                        <Row>
                                            <Col span={24} className='bottom-border-1-primary pb-3'>
                                                <Row>
                                                    <Col span={10} className='self-end'>
                                                        <Title level={4} className='font-aquila-color-3'>Features</Title>
                                                    </Col>
                                                    <Col span={7}>
                                                        <Card className='primary-bg mx-2' bodyStyle={{ padding: 0 }}>
                                                            <div className="grid justify-items-stretch">
                                                                <div className="justify-self-center">
                                                                    <Space direction='vertical' size={0} className='text-center'>
                                                                        <Title level={5} className='font-white mt-3'>Base Rate</Title>
                                                                        <Title level={4} className='font-white'>PHP 1,999 / mo</Title>
                                                                    </Space>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col span={7}>
                                                        <Card className='primary-bg mx-2' bodyStyle={{ padding: 0 }}>
                                                            <div className="grid justify-items-stretch">
                                                                <div className="justify-self-center">
                                                                    <Space direction='vertical' className='text-center' size={0}>
                                                                        <Title level={5} className='font-white mt-3'>Premium Rate</Title>
                                                                        <Title level={4} className='font-white'>PHP 2,499 / mo</Title>
                                                                    </Space>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={24} className='bottom-border-1-primary py-3'>
                                                <Row>
                                                    <Col span={10} className='self-end'>
                                                        <Text className='font-neutral-gray-color-2 text-base'>Unlimited Patients (DB Capacity)</Text>
                                                    </Col>
                                                    <Col span={7}>
                                                        <div className="grid justify-items-stretch">
                                                            <div className="justify-self-center">
                                                                <CheckOutlined className='font-neutral-gray-color-2 text-2xl' />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={7}>
                                                        <div className="grid justify-items-stretch">
                                                            <div className="justify-self-center">
                                                                <CheckOutlined className='font-neutral-gray-color-2 text-2xl' />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={24} className='bottom-border-1-primary py-3'>
                                                <Row>
                                                    <Col span={10} className='self-end'>
                                                        <Text className='font-neutral-gray-color-2 text-base'>24/7 Tech Support</Text>
                                                    </Col>
                                                    <Col span={7}>
                                                        <div className="grid justify-items-stretch">
                                                            <div className="justify-self-center">
                                                                <CheckOutlined className='font-neutral-gray-color-2 text-2xl' />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={7}>
                                                        <div className="grid justify-items-stretch">
                                                            <div className="justify-self-center">
                                                                <CheckOutlined className='font-neutral-gray-color-2 text-2xl' />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={24} className='bottom-border-1-primary py-3'>
                                                <Row>
                                                    <Col span={10} className='self-end'>
                                                        <Text className='font-neutral-gray-color-2 text-base'>Unlimited Image Upload (DB Capacity)</Text>
                                                    </Col>
                                                    <Col span={7}>
                                                        <div className="grid justify-items-stretch">
                                                            <div className="justify-self-center">
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={7}>
                                                        <div className="grid justify-items-stretch">
                                                            <div className="justify-self-center">
                                                                <CheckOutlined className='font-neutral-gray-color-2 text-2xl' />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={24} className='bottom-border-1-primary py-3'>
                                                <Row>
                                                    <Col span={10} className='self-end'>
                                                        <Text className='font-neutral-gray-color-2 text-base'>10GB Data Storage</Text>
                                                    </Col>
                                                    <Col span={7}>
                                                        <div className="grid justify-items-stretch">
                                                            <div className="justify-self-center">
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={7}>
                                                        <div className="grid justify-items-stretch">
                                                            <div className="justify-self-center">
                                                                <CheckOutlined className='font-neutral-gray-color-2 text-2xl' />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={24} className='bottom-border-1-primary py-3'>
                                                <Row>
                                                    <Col span={10} className='self-end'>
                                                        <Text className='font-neutral-gray-color-2 text-base'>Listed on <span className='font-aquila-color-3'>Clinix+</span></Text>
                                                    </Col>
                                                    <Col span={7}>
                                                        <div className="grid justify-items-stretch">
                                                            <div className="justify-self-center">
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={7}>
                                                        <div className="grid justify-items-stretch">
                                                            <div className="justify-self-center">
                                                                <CheckOutlined className='font-neutral-gray-color-2 text-2xl' />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={24} className='pt-8'>
                                                <Row>
                                                    <Col offset={10} span={7}>
                                                        <div className="grid justify-items-stretch">
                                                            <div className="justify-self-center">
                                                                <Button
                                                                    block
                                                                    type="primary"
                                                                    className={styles.subsBtn + ' gold-bg rounded-full h-12 drop-shadow-lg'}
                                                                >
                                                                    Subscribe
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={7}>
                                                        <div className="grid justify-items-stretch">
                                                            <div className="justify-self-center">
                                                                <Button
                                                                    block
                                                                    type="primary"
                                                                    className={styles.subsBtn + ' gold-bg rounded-full h-12 drop-shadow-lg'}
                                                                >
                                                                    Subscribe
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} className={styles.featureSection + ' gutter-row mt-96'}>
                            <Row>
                                <Col span={14}>
                                    <Row>
                                        <Col span={12} className="p-3">
                                            <Card className='drop-shadow-2xl blurry-bg p-3'>
                                                <div className="grid justify-items-stretch">
                                                    <div className="justify-self-center">
                                                        <Space direction='vertical' className='text-center' size={42}>
                                                            <Text className='font-aquila-color-3 text-xl font-bold'>Mobile Apps</Text>
                                                            <Text className='font-neutral-gray-color-2'>
                                                                Aquila develops mobile apps tailored on our client&rsquo;s needs. We also build apps to
                                                                integrate with our suite of products.
                                                            </Text>
                                                            <Button
                                                                block
                                                                type="primary"
                                                                className='gold-bg rounded-full drop-shadow-lg'
                                                                size={'large'}
                                                            >
                                                                Get a Quote
                                                            </Button>
                                                        </Space>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={12} className="p-3">
                                            <Card className='drop-shadow-2xl blurry-bg p-3'>
                                                <div className="grid justify-items-stretch">
                                                    <div className="justify-self-center">
                                                        <Space direction='vertical' className='text-center' size={30}>
                                                            <Text className='font-aquila-color-3 text-xl font-bold'>Web Applications</Text>
                                                            <Text className='font-neutral-gray-color-2'>
                                                                We build custom web applications based on our client&rsquo;s needs and business. We make sure that we
                                                                maximize our tools to cater our clients.
                                                            </Text>
                                                            <Button
                                                                block
                                                                type="primary"
                                                                className='gold-bg rounded-full drop-shadow-lg'
                                                                size={'large'}
                                                            >
                                                                Get a Quote
                                                            </Button>
                                                        </Space>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={12} className="p-3">
                                            <Card className='drop-shadow-2xl blurry-bg p-3'>
                                                <div className="grid justify-items-stretch">
                                                    <div className="justify-self-center">
                                                        <Space direction='vertical' className='text-center' size={42}>
                                                            <Text className='font-aquila-color-3 text-xl font-bold'>Data Analysis</Text>
                                                            <Text className='font-neutral-gray-color-2'>
                                                                We help businesses analyze their business&rsquo; tech needs and requirements and make sure to provide
                                                                them with the right solutions.
                                                            </Text>
                                                            <Button
                                                                block
                                                                type="primary"
                                                                className='gold-bg rounded-full drop-shadow-lg'
                                                                size={'large'}
                                                            >
                                                                Get a Quote
                                                            </Button>
                                                        </Space>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={12} className="p-3">
                                            <Card className='drop-shadow-2xl blurry-bg p-3'>
                                                <div className="grid justify-items-stretch">
                                                    <div className="justify-self-center">
                                                        <Space direction='vertical' className='text-center' size={50}>
                                                            <Text className='font-aquila-color-3 text-xl font-bold'>Dev Operations & Automation</Text>
                                                            <Text className='font-neutral-gray-color-2'>
                                                                Aquila softwares provides automation systems tailored to your business process.
                                                            </Text>
                                                            <Button
                                                                block
                                                                type="primary"
                                                                className='gold-bg rounded-full drop-shadow-lg'
                                                                size={'large'}
                                                            >
                                                                Get a Quote
                                                            </Button>
                                                        </Space>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={10} className="p-3 pl-10">
                                    <Title className='font-aquila-color-3'>Custom Applications</Title>
                                    <Paragraph className='font-neutral-gray-color-2'>
                                        Aquila Softwares, not only develop our own products but we also cater specific tech solutions 
                                        for different businesses and clients. From hospitals, manufacturing, distribution, and many more.
                                    </Paragraph>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Pricing

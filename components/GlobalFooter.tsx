import { Typography, Row, Col, Button, Card, Space, Form, Input, Divider } from 'antd';
import {
    FacebookFilled,
    LinkedinFilled,
    InstagramFilled
} from '@ant-design/icons'
import styles from '../styles/GlobalFooter.module.scss';
const { Title, Paragraph, Text } = Typography;

export default function Footer() {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.footerContainer + ' px-36 pb-0'}>
            <Col span={24} className='grid justify-items-stretch'>
                <div className="justify-self-center">
                    <Row className="px-16">
                        <Col span={24}>
                            <span className={styles.tagWrap}>
                                <Card className={styles.footerHeader}>
                                    <Row className={styles.cardContent}>
                                        <Col span={16} className="px-16">
                                            <Title className='font-aquila-color-3'>Start your journey with us.</Title>
                                            <Paragraph className='font-neutral-gray-color-2'>
                                                We believe that only working together we can accomplish great things.
                                                This is our main mantra and we would like to share this with you.
                                            </Paragraph>
                                        </Col>
                                        <Col span={8} className='self-center p-6'>
                                            <Button
                                                block
                                                type="primary"
                                                className='gold-bg rounded-full h-12 w-12 drop-shadow-lg'
                                            >
                                                Book a Call
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </span>
                        </Col>
                    </Row>
                    <Row className="px-28 mt-24">
                        <Col span={24}>
                            <Row>
                                <Col span={8}>
                                    <Title level={4} className='font-white'>Navigation</Title>
                                    <Space direction="vertical" size="middle" className='flex font-white'>
                                        <p>Home</p>
                                        <p>Who We Are</p>
                                        <p>Pricing</p>
                                        <p>Contact Us</p>
                                    </Space>
                                </Col>
                                <Col span={8}>
                                    <Title level={4} className='font-white'>Socials</Title>
                                    <Space direction="horizontal" size="middle" className='flex font-white'>
                                        <FacebookFilled className='text-4xl' />
                                        <LinkedinFilled className='text-4xl' />
                                        <InstagramFilled className='text-4xl' />
                                    </Space>
                                </Col>
                                <Col span={8}>
                                    <Title level={4} className='font-white'>Contact</Title>
                                    <Text className='font-white'>One of our representatives will contact you soon.</Text>
                                    <Form
                                        name="basic"
                                        initialValues={{ remember: true }}
                                        autoComplete="off"
                                        className='pr-5 mt-5'
                                    >
                                        <Form.Item name="username">
                                            <Input placeholder='Name' className='py-3 rounded-full' />
                                        </Form.Item>

                                        <Form.Item name="email">
                                            <Input placeholder='Email' className='py-3 rounded-full' />
                                        </Form.Item>

                                        <Form.Item name="contact">
                                            <Input placeholder='Contact' className='py-3 rounded-full' />
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
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className={styles.footNote + ' pt-2 mt-24'}>
                            <Text className={styles.span}>Copyright Aquila Softwares Corporation 2022. All Rights Reserved.</Text>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};
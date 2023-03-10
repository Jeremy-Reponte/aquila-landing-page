import type { NextPage } from 'next'
import styles from '../styles/WhoWeAre.module.scss';
import { Typography, Row, Col, Button, Card, Space, Form, Input } from 'antd';
import Image from 'next/image';
import React from 'react';
import banner3 from '../public/assets/img-banner-3.png';
import banner4 from '../public/assets/img-banner-4.png';
import partner1 from '../public/assets/partners/shock-logo.png';
import partner2 from '../public/assets/partners/ideas-logo.png';
import partner3 from '../public/assets/partners/ivf-logo.png';
import partner4 from '../public/assets/partners/bizhub-logo.png';
import partner5 from '../public/assets/partners/ecomed-logo.png';


const { Title, Paragraph } = Typography;

const WhoWeAre: NextPage = () => {
    return (
        <div className='mb-10'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.whoWeAreSection1 + ' px-36 mb-10'}>
                <Col span={24} className='pt-44'>
                    <Row>
                        <Col span={24} className='mb-48'>
                            <Row>
                                <Col className="gutter-row self-center" span={8}>
                                    <Title className='font-white'>Helping People is in our Genes</Title>
                                    <Paragraph className='font-white'>
                                        In Aquila, we always ensure our clients&rsquo; needs is at the top of our priority.
                                        Making sure everything is for their benefit.
                                    </Paragraph>
                                    <Button className='gold-bg mt-2 drop-shadow-lg' type="primary" shape="round" size={'large'}>
                                        Call Us Now
                                    </Button>
                                </Col>
                                <Col span={16}>
                                    <div className="grid justify-items-stretch">
                                        <div className="justify-self-center">
                                            <Image width={800} height={600} src={banner3} alt="img-banner" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} className='gutter-row mt-80 mb-24'>
                            <Row>
                                <Col span={16}>
                                    <div className="grid justify-items-stretch">
                                        <div className="justify-self-center">
                                            <Image width={576} src={banner4} alt="img-banner" />
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6} className="mt-20">
                                    <Title className='font-aquila-color-3'>Message from Our Founder</Title>
                                    <Paragraph className='font-neutral-gray-color-2'>
                                        We aim to strengthen and improve our way of living by focusing our efforts to help patients
                                        and medical professionals work efficiently and effectively through cutting-edge medical
                                        technologies. As a Philippine based software company, we want to pave the way in developing
                                        medical systems that would be used worldwide. It is in our genes to help and always put our clients&rsquo;
                                        best interests above our own.
                                    </Paragraph>
                                    <Button className='gold-bg mt-2 drop-shadow-lg' type="primary" shape="round" size={'large'}>
                                        Call Us Now
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} className='gutter-row mt-56 mb-64'>
                            <Row>
                                <Col span={24}>
                                    <Title className='text-center font-aquila-color-3 pb-16'>Company Core Values</Title>
                                    <Row>
                                        <Col span={8}>
                                            <div className="grid justify-items-stretch">
                                                <div className="justify-self-center">
                                                    <Card className={styles.coreValuesCircleDiv + ' drop-shadow-xl primary-bg'} size='small'>
                                                        <Title level={4} className='font-white text-center mt-3'>Integrity Above All</Title>
                                                        <Paragraph className='font-white text-center'>
                                                            Having strong moral principles is in our core character.
                                                        </Paragraph>
                                                    </Card>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className="grid justify-items-stretch">
                                                <div className="justify-self-center">
                                                    <Card className={styles.coreValuesCircleDiv + ' drop-shadow-xl primary-bg'} size='small'>
                                                        <Title level={4} className='font-white text-center mt-3'>Service Over Business</Title>
                                                        <Paragraph className='font-white text-center'>
                                                            We prioritize service and focus our efforts in improving it.
                                                        </Paragraph>
                                                    </Card>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className="grid justify-items-stretch">
                                                <div className="justify-self-center">
                                                    <Card className={styles.coreValuesCircleDiv + ' drop-shadow-xl primary-bg'} size='small'>
                                                        <Title level={4} className='font-white text-center mt-3'>Quality is Priority</Title>
                                                        <Paragraph className='font-white text-center'>
                                                            Building quality softwares and tools is our number one goal.
                                                        </Paragraph>
                                                    </Card>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} className='gutter-row mt-56'>
                            <Title className='text-center font-aquila-color-3 pb-16'>Our Partners</Title>
                            <Row className='mt-40'>
                                <Col offset={8} span={16}>
                                    <Row>
                                        <Col span={12} className='gutter-row self-center mb-6'>
                                            <div className="grid justify-items-stretch">
                                                <div className="justify-self-center">
                                                    <Image width={1208} height={300} src={partner1} alt="img-banner" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={12} className='gutter-row self-center mb-6'>
                                            <div className="grid justify-items-stretch">
                                                <div className="justify-self-center">
                                                    <Image width={160} height={130} src={partner2} alt="img-banner" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={8} className='gutter-row self-center mb-6'>
                                            <div className="grid justify-items-stretch">
                                                <div className="justify-self-center">
                                                    <Image width={150} height={150} src={partner3} alt="img-banner" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={8} className='gutter-row self-center mb-6'>
                                            <div className="grid justify-items-stretch">
                                                <div className="justify-self-center">
                                                    <Image width={150} height={150} src={partner4} alt="img-banner" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={8} className='gutter-row self-center'>
                                            <div className="grid justify-items-stretch">
                                                <div className="justify-self-center">
                                                    <Image width={578} src={partner5} alt="img-banner" />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default WhoWeAre

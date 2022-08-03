import React from 'react';
import type { NextPage } from 'next'
import { Typography, Row, Col, Space } from 'antd';
import styles from '../styles/ContactUs.module.scss';
import {
    ToolOutlined
} from '@ant-design/icons';

const { Text } = Typography;

const ContactUs: NextPage = () => {
    return (
        <div className='mb-10'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.contactUsSection1 + ' px-36 mb-44'}>
                <Col span={24} className='pt-44'>
                    <div className="grid justify-items-stretch">
                        <div className="justify-self-center">
                            <Space direction='vertical' className='text-center'>
                                <ToolOutlined className='font-white text-8xl font-bold' />
                                <Text className='font-white text-5xl font-bold'>Under Construction</Text>
                            </Space>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ContactUs

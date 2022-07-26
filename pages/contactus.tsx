import React from 'react';
import type { NextPage } from 'next'
import { Typography, Row, Col } from 'antd';
import styles from '../styles/ContactUs.module.scss';

const { Text } = Typography;

const ContactUs: NextPage = () => {
    return (
        <div className='mb-10'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.contactUsSection1 + ' px-36 mb-44'}>
                <Col span={24} className='pt-44'>
                    <Text className='font-white text-5xl'>Contact Us</Text>
                </Col>
            </Row>
        </div>
    )
}

export default ContactUs

import { ReactNode } from 'react';
import Image from 'next/image';
import { BackTop, Col, Layout, Row } from 'antd';
import MainNavigation from './navigations/MainNavigation';
import styles from '../styles/MainLayout.module.scss';
import GlobalFooter from './GlobalFooter';

const { Header, Content, Footer } = Layout;

interface Props {
    children?: ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <BackTop />
            <Layout className={styles.mainLayout + " layout"}>
                <Header className={styles.mainHeader}>
                    <div className='container col-12'>
                        <Row className='div-content-vertical-align px-36 pt-20'>
                            <Col span={24}>
                                <Image className="logo" src='../assets/aquila-logo.png' alt="img-banner" />
                                <div className={styles.mainNavigation}>
                                    <MainNavigation />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Header>
                <Content>
                    <Row>
                        <Col span={24}>
                            <div className='container col-12'>
                                {children}
                                <GlobalFooter />
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    )
}

export default MainLayout;
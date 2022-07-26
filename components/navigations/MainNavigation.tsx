import Link from 'next/link';
import { Menu, MenuProps } from 'antd';
import styles from '../../styles/navigations/MainNavigation.module.scss'
import { useState } from 'react';

const items: MenuProps['items'] = [
    {
        label: (
            <Link href="/">
                Home
            </Link>
        ),
        key: 'home',
    },
    {
        label: (
            <Link href="/whoweare">
                Who We Are
            </Link>
        ),
        key: 'whoweare',
    },
    {
        label: (
            <Link href="/pricing">
                Pricing
            </Link>
        ),
        key: 'pricing',
    },
    {
        label: (
            <Link href="/contactus">
                Contact Us
            </Link>
        ),
        key: 'contactus',
    }
];

export default function MainNavigation() {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu
            className={styles.navigationContainer}
            mode="horizontal"
            onClick={onClick}
            selectedKeys={[current]}
            items={items}
            forceSubMenuRender={false}
        />
    );
};
import 'antd/dist/antd.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import MainLayout from '../components/MainLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Aquila Softwares</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp

/*
<Head>
<title></title>
<meta property="og:title"       content="" />
<meta property="og:description" content="" />
<meta name="description"        content="" />
<meta property="og:image"       content="http://simpletravelers.sk/images/photosFull/ZionAngelsLanding.jpg" />
<meta property="og:url" 		content="http://simpletravelers.sk/" />
<link rel="canonical" href="http://simpletravelers.sk/" />
<meta name="keywords" content="" />
</Head>
*/
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Footer from '../components/Footer'; 

import "../styles/styles.css";
import "../styles/min576.css";
import "../styles/min768.css";
import "../styles/min992.css";
import "../styles/min1200.css";
import "../styles/slider.css";
import "../styles/image-grid.css";
import "../styles/burger-menu.scss";
import 'antd/dist/antd.css';


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
			</Head>
			<Layout/>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
